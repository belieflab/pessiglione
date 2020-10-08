if (reward == 'money') {
  for (let i = 0; i < instructionsTextMoney.length; i++) {
    instructions.push({
      type: "html-keyboard-response",
      stimulus: instructionsTextMoney[i],
      choices: [32]
    });
    timeline.push(instructions[i]);
  };
  timeline.push(practiceStart);
} else if (reward == 'points') {
  for (let i = 0; i < instructionsTextPoints.length; i++) {
    instructions.push({
      type: "html-keyboard-response",
      stimulus: instructionsTextPoints[i],
      choices: [32]
    });
    timeline.push(instructions[i]);
  };
  timeline.push(practiceStart);
}

/* practice trials */
let practiceProcedure = {
    timeline: [fixation, stimuli, feedback],
    timeline_variables: practiceStimVersion,
    randomize_order: false,
    type: 'fixed-repititions',
    repetitions: 1
  };
timeline.push(practiceProcedure);

/* add instructions to timeline */
let trainingInstructions = [];

if (reward == 'money') {
  for (let i = 0; i < trainingInstructionsTextMoney.length; i++) {
    trainingInstructions.push({
      type: "html-keyboard-response",
      stimulus: trainingInstructionsTextMoney[i],
      choices: [32]
    });
    timeline.push(trainingInstructions[i]);
  };
} else if (reward == 'points') {
  for (let i = 0; i < trainingInstructionsTextPoints.length; i++) {
    trainingInstructions.push({
      type: "html-keyboard-response",
      stimulus: trainingInstructionsTextPoints[i],
      choices: [32]
    });
    timeline.push(trainingInstructions[i]);
  };
}

/* training trials */
let trainingProcedureBlock1 = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: trainingStimBlock1,
  randomize_order: false,
  type: 'fixed-repititions',
  repetitions: 1
};
timeline.push(trainingProcedureBlock1);

/* announce start of 2nd block */
let newBlockStart = {
  type:  "html-keyboard-response",
  stimulus: startNewBlockText,
  choices: [32],
};
timeline.push(newBlockStart);

/* training trials block 2 */
//let trainingProcedure2 = trainingProcedure
let trainingProcedureBlock2 = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: trainingStimBlock2,
  randomize_order: false,
  type: 'fixed-repititions',
  repetitions: 1
};
timeline.push(trainingProcedureBlock2);

/* announce start of 3rd block */
//let newBlockStart3 = newBlockStart
timeline.push(newBlockStart);

/* training trials block 3 */
//let trainingProcedure3 = trainingProcedure
let trainingProcedureBlock3 = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: trainingStimBlock3,
  randomize_order: false,
  type: 'fixed-repititions',
  repetitions: 1
};
timeline.push(trainingProcedureBlock3);

/* announce start of 4th block */
//let newBlockStart3 = newBlockStart
timeline.push(newBlockStart);

/* training trials block 3 */
//let trainingProcedure3 = trainingProcedure
let trainingProcedureBlock4 = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: trainingStimBlock4,
  randomize_order: false,
  type: 'fixed-repititions',
  repetitions: 1
};
timeline.push(trainingProcedureBlock4);

/* add instructions to timeline */
let testInstructions = [];

if (reward == 'money') {
  for (let i = 0; i < testInstructionsTextMoney.length; i++) {
    testInstructions.push({
      type: "html-keyboard-response",
      stimulus: testInstructionsTextMoney[i],
      choices: [32]
    });
    timeline.push(testInstructions[i]);
  };
} else if (reward == 'points') {
  for (let i = 0; i < testInstructionsTextPoints.length; i++) {
    testInstructions.push({
      type: "html-keyboard-response",
      stimulus: testInstructionsTextPoints[i],
      choices: [32]
    });
    timeline.push(testInstructions[i]);
  };
}

/* test trials */
let testProcedure = {
  timeline: [fixation, stimuli, feedback_testphase],
  timeline_variables: testStimVersion,
  randomize_order: true,
  type: 'fixed-repititions',
  repetitions: 3
};
timeline.push(testProcedure);

/* completion */
let thankYou = {
  type: "html-keyboard-response",
  stimulus: '<p>Thank you.</p>', 
  trial_duration: 5000,
  choices: [32],
};
timeline.push(thankYou);