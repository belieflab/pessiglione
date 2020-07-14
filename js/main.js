
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
  choices: [leftASCII, rightASCII]
};
timeline.push(practiceStart);

// create fixation dot
let fixation = {
  data: {test_part: 'fixation'},
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  trial_duration: 500,
  stimulus: function(){
    var html="<img style='width:10px; height:10px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>";
    return html;
  }, 
};

// create  stimuli trials
let stimuli = {
  type: "html-keyboard-response",
  stimulus: function(){
            var html="<img src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>" +
            "<img style='width:10px; height:10px; margin-bottom: 95px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>" +
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
      case 49:
        while(feedbackA.length > 0 && feedbackB.length > 0) {
          feedbackA.pop();
          feedbackB.pop();
        }
        feedbackA.push(jsPsych.timelineVariable('stimulusLeft', true))
        feedbackB.push(jsPsych.timelineVariable('stimulusLeft', true))
        break;
      case 50:
        while(feedbackA.length > 0 && feedbackB.length > 0) {
          feedbackA.pop();
          feedbackB.pop();
        }
        feedbackA.push(jsPsych.timelineVariable('stimulusRight', true))
        feedbackB.push(jsPsych.timelineVariable('stimulusRight', true))
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
      var html = "<img style='border: 5px solid #f90909;'src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>" +
      "<img style='width:10px; height:10px; margin-bottom: 95px;' src='stim/dot_white.png'>" +
             "<img src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
             return html
    } else if (participantResponse == rightASCII) { // if last correct_response == 48 (0 key)
      var html = "<img src='"+jsPsych.timelineVariable('stimulusLeft', true)+"'>"+
      "<img style='width:10px; height:10px; margin-bottom: 95px;' src='stim/dot_white.png'>" +
             "<img style='border: 5px solid #f90909;'src='"+jsPsych.timelineVariable('stimulusRight', true)+"'>";
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
    timeline_variables: A,
    randomize_order: false,
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