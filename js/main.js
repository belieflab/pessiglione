
/* create timeline */
let timeline = [];

/* add instructions to timeline */
let instructions = [];

for (let i = 0; i < instructionsText.length; i++) {
  instructions.push({
    type: "html-keyboard-response",
    stimulus: instructionsText[i],
    choices: [32]
  });
  timeline.push(instructions[i]);
};

/* announce start of practice trials */
let practiceStart = {
  type:  "html-keyboard-response",
  stimulus: '<p>First you will do some practice trials.</p> <p>Press either button when you are ready to begin.</p>',
  choices: [leftASCII, rightASCII],
  on_finish: versionSelect(),
};
timeline.push(practiceStart);

// create fixation dot
let fixation = {
  data: {test_part: 'fixation'},
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  trial_duration: 500,
  stimulus: function(){
    var html="<img style='width:200px; height:200px; margin-left: 95px; margin-right: 95px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>";
    return html;
  }, 
};

// create  stimuli trials
let stimuli = {
  type: "html-keyboard-response",
  stimulus: function(){
            var html="<img src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>" +
            "<img style='width:200px; height:200px; margin-bottom: 0px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>" +
            "<img src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
            return html;
  }, 
  choices: [leftASCII, rightASCII],
  response_ends_trial: true,
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    test_part = jsPsych.data.get().last().values()[0].test_part;
    pair = jsPsych.data.get().last().values()[0].pair;
    pair_validity = jsPsych.data.get().last().values()[0].pair_validity;
    trial_validity = jsPsych.data.get().last().values()[0].trial_validity;
    pairTrialsPerBlock = jsPsych.data.get().last().values()[0].pairTrialsPerBlock;
    reward_type = jsPsych.data.get().last().values()[0].reward_type;
    good_stim = jsPsych.data.get().last().values()[0].good_stim;
    correct_response = jsPsych.data.get().last().values()[0].correct_response;
    console.log(test_part, pair, pair_validity, trial_validity, pairTrialsPerBlock, reward_type, good_stim, correct_response);
    if (trial_validity === 'valid') {
      if (reward_type === 'win:stay') {
        if (data.key_press === data.correct_response) {
          console.log('correct');
          data.accuracy = 1;
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[0]); //they win a nickel
        } else if (data.key_press !== data.correct_response) {
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[1]); //they win nothing
          console.log('incorrect');
          data.accuracy = 0;
        }
     } else if (reward_type === 'avoid:lose') {
        if (data.key_press === data.correct_response) {
          console.log('correct');
          data.accuracy = 1;
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[2]); //they lose nothing
        } else if (data.key_press !== data.correct_response) {
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[3]); //they lose a nickel
          console.log('incorrect');
          data.accuracy = 0;
        }
      }
    } else if (trial_validity === 'invalid') {
      if (reward_type === 'win:stay') {
        if (data.key_press === data.correct_response) {
          console.log('technically correct');
          data.accuracy = 1;
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[1]); //they win nothing
        } else if (data.key_press !== data.correct_response) {
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[0]); //they win a nickel
          console.log('technically incorrect');
          data.accuracy = 0;
        }
     } else if (reward_type === 'avoid:lose') {
        if (data.key_press === data.correct_response) {
          console.log('technically correct');
          data.accuracy = 1;
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[3]); //they lose a nickel
        } else if (data.key_press !== data.correct_response) {
          feedbackContainer.pop();
          feedbackContainer.push(feedbackOptions[2]); //they lose nothing
          console.log('technically incorrect');
          data.accuracy = 0;
        }
      }
    }
    switch(data.key_press){
      case leftASCII:
        while(choice.length > 0) {
          choice.pop();
        }
        choice.push(jsPsych.timelineVariable('stimulusLeft', true))
        break;
      case rightASCII:
        while(choice.length > 0) {
          choice.pop();
        }
        choice.push(jsPsych.timelineVariable('stimulusRight', true))
        break;
      default:
    }
  }
};


// create feedback trials
let feedback = {
  data: {test_part: 'feedback'},
  type: 'html-keyboard-response',
  stimulus: function() {
    let participantResponse = jsPsych.data.get().last(1).values()[0].key_press;
    console.log(participantResponse)
    if (participantResponse == leftASCII) { // if last correct_response == 49 (1 key)
      var html = "<img style='border: 5px solid #808080;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>" +
      "<img style='width:100px; height:100px; padding-right: 75px; padding-left: 75px; margin-bottom: 50px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
             "<img style='border: 5px solid #ffffff;  padding-left:15px;' src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
             return html
    } else if (participantResponse == rightASCII) { // if last correct_response == 48 (0 key)
      var html = "<img style='border: 5px solid #ffffff; padding-right:15px;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>"+
      "<img style='width:100px; height:100px; padding-right: 75px; padding-left: 75px; margin-bottom: 50px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
             "<img style='border: 5px solid #808080;'src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
             return html
    }
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
  response_ends_trial: false,
  // post_trial_gap: jsPsych.randomization.sampleWithReplacement(isi, 5, [5,1]),
  post_trial_gap: 500, //ISI
  on_finish: function(data){
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    // data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    
  }
};

/* practice trials */
let practiceProcedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: practiceStimVersion,
    randomize_order: true,
    type: 'fixed-repititions',
    repetitions: 3
  };
timeline.push(practiceProcedure);

/* add instructions to timeline */
let trainingInstructions = [];

for (let i = 0; i < trainingInstructionsText.length; i++) {
  trainingInstructions.push({
    type: "html-keyboard-response",
    stimulus: trainingInstructionsText[i],
    choices: [32]
  });
  timeline.push(trainingInstructions[i]);
};

/* training trials */
let trainingProcedure = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: trainingStimVersion,
  randomize_order: true,
  type: 'fixed-repititions',
  repetitions: 1
};
timeline.push(trainingProcedure);

/* announce start of 2nd block */
let newBlockStart = {
  type:  "html-keyboard-response",
  stimulus: startNewBlockText,
  choices: [leftASCII, rightASCII],
};
timeline.push(newBlockStart);

/* training trials block 2 */
//let trainingProcedure2 = trainingProcedure
timeline.push(trainingProcedure);

/* announce start of 3rd block */
//let newBlockStart3 = newBlockStart
timeline.push(newBlockStart);

/* training trials block 3 */
//let trainingProcedure3 = trainingProcedure
timeline.push(trainingProcedure);

/* add instructions to timeline */
let testInstructions = [];

for (let i = 0; i < testInstructionsText.length; i++) {
  testInstructions.push({
    type: "html-keyboard-response",
    stimulus: testInstructionsText[i],
    choices: [32]
  });
  timeline.push(testInstructions[i]);
};

/* announce start of test block */
let testStart = {
  type:  "html-keyboard-response",
  stimulus: startTestText,
  choices: [leftASCII, rightASCII],
};
timeline.push(testStart);

/* test trials */
let testProcedure = {
  timeline: [fixation, stimuli],
  timeline_variables: testStimVersion,
  randomize_order: true,
  type: 'fixed-repititions',
  repetitions: 3
};
timeline.push(testProcedure);

/* completion */
let thankYou = {
  type: "html-keyboard-response",
  stimulus: '<p">Thank you.</p>', 
      // +"<a href=" + link + ' target="_blank">' + link + "</a>",
  // choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
};
timeline.push(thankYou);