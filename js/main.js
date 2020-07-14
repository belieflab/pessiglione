
/* create timeline */
let timeline = [];

// /* add instructions to timeline */
let instructions = [];

for (let i = 0; i < instructionsText.length; i++) {
  instructions.push({
    type: "html-keyboard-response",
    stimulus: instructionsText[i],
    choices: [32]
  });
  timeline.push(instructions[i]);
  }

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
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    // data.practice = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    if (data.key_press == data.correct_response) {
      data.accuracy = 1
    } else {
      data.accuracy = 0
    }
    switch(data.key_press){
      case leftASCII:
        while(choiceA.length > 0 && choiceB.length > 0) {
          choiceA.pop();
          choiceB.pop();
        }
        choiceA.push(jsPsych.timelineVariable('stimulusLeft', true))
        choiceB.push(jsPsych.timelineVariable('stimulusLeft', true))
        break;
      case rightASCII:
        while(choiceA.length > 0 && choiceB.length > 0) {
          choiceA.pop();
          choiceB.pop();
        }
        choiceA.push(jsPsych.timelineVariable('stimulusRight', true))
        choiceB.push(jsPsych.timelineVariable('stimulusRight', true))
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
    if (participantResponse == leftASCII) { // if last correct_response == 49 (1 key)
      var html = "<img style='border: 5px solid #808080;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>" +
      "<img style='width:200px; height:200px; margin-bottom: 0px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
             "<img style='border: 5px solid #ffffff;  padding-left:15px;' src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
             return html
    } else if (participantResponse == rightASCII) { // if last correct_response == 48 (0 key)
      var html = "<img style='border: 5px solid #ffffff; padding-right:15px;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>"+
      "<img style='width:200px; height:200px; margin-bottom: 0px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
             "<img style='border: 5px solid #808080;'src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
             return html
    }
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
  response_ends_trial: false,
  // post_trial_gap: jsPsych.randomization.sampleWithReplacement(isi, 5, [5,1]),
  post_trial_gap: 1000, //ISI
  on_finish: function(data){
    // data.practice = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
    // data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    
  }
};

/* practice trials */
let practiceProcedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: stimVersion,
    randomize_order: true,
    type: 'fixed-repititions',
    repetitions: 3
  };
timeline.push(practiceProcedure);

/* completion */
let thankYou = {
  type: "html-keyboard-response",
  stimulus: '<p">Thank you.</p>', 
      // +"<a href=" + link + ' target="_blank">' + link + "</a>",
  // choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
};
timeline.push(thankYou);