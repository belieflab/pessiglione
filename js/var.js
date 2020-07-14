
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*  make sure you know what you are doing with these buttons and levers; you may break the experiment  */
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// declare global timeline variable
let stimVersion;


/* PRACTICE CONFIG *///

let practice_pairs =      ['ab' ,'ef'];
let practice_validity =   [1.0  ,1.0];
let practice_good_stim =  ['a'  ,'e'];
let practice_trial_type = ['win:stay','avoid:lose'];

/* practice stim versions A & B */
let pracA = ['Field4','Field10','Field13','Field17'];
let pracB = ['African_landscape','closeWater_pines_mountains','Trees_with_flowers','wheat_with_farmhouse'];
let trainA = ['Field3','Field5','Field14','Field11','Field9','Field12','Field15','Field16'];
let trainB = ['3d-landscape-background-10','2822landscape','lsingeltree_tallergrass_clouds','orangey_field','water_fall_images','water_pines_distantMountains','water_pines_snowy_moutain','waterfall_waterBelow'];

/* stim paths */
let pracStimA = [];
for (let i=0; i<pracA.length; i++) {
    pracStimA.push('stim/a/'+pracA[i]+'.bmp');
}
let pracStimB = [];
for (let i=0; i<pracB.length; i++) {
    pracStimB.push('stim/b/'+pracB[i]+'.jpg');
}


/* feedback stimu paths passed by reference */
let choiceA = [];
let choiceB = [];

/* feedback stimu paths passed by reference */
let feedbackOptions = ['stim/win.bmp', 'stim/not_winner.png', 'stim/keep_money.png', 'stim/lose.bmp'];
let feedbackContainer = [];
let upcoming_feedback;

/* fixation dot */
let fixationDot = 'stim/fixation.png';
let blankDot = 'stim/blank.png';

/* version A stimuli objects */

let practiceA = [
  {stimulusLeft: pracStimA[0], stimulusRight: pracStimA[1], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: pracStimA[1], stimulusRight: pracStimA[0], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: pracStimA[2], stimulusRight: pracStimA[3], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: pracStimA[3], stimulusRight: pracStimA[2], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: rightASCII}}, // 0 key
]

/* version B stimuli objects */

let practiceB = [
  {stimulusLeft: pracStimB[0], stimulusRight: pracStimB[1], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: pracStimB[1], stimulusRight: pracStimB[0], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: pracStimB[2], stimulusRight: pracStimB[3], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: pracStimB[3], stimulusRight: pracStimB[2], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: rightASCII}}, // 0 key
]


/* EXPERMENTAL CONFIG *///

let training_pairs =      ["ab" ,"cd" ,"ef" ,"gh"];
let training_validity =   [0.9  ,0.8  ,0.9  ,0.8];
let training_good_stim =  ["a"  ,"c"  ,"e"  ,"g"];
let training_trial_type = ["win:stay","win:stay","avoid:lose","avoid:lose"];

/* stim paths */

let trainStimA = [];
for (let i=0; i<trainA.length; i++) {
    trainStimA.push('stim/a/'+trainA[i]+'.bmp');
}

let trainStimB = [];
for (let i=0; i<trainB.length; i++) {
    trainStimB.push('stim/b/'+trainB[i]+'.jpg');
}
/* version A stimuli objects */

let trainingA = [
  {stimulusLeft: trainStimA[0], stimulusRight: trainStimA[1], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], good_stim: training_good_stim[0], trial_type: training_trial_type[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[1], stimulusRight: trainStimA[0], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], good_stim: training_good_stim[0], trial_type: training_trial_type[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimA[2], stimulusRight: trainStimA[3], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], good_stim: training_good_stim[1], trial_type: training_trial_type[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[3], stimulusRight: trainStimA[2], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], good_stim: training_good_stim[1], trial_type: training_trial_type[1], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], good_stim: training_good_stim[2], trial_type: training_trial_type[2], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], good_stim: training_good_stim[2], trial_type: training_trial_type[2], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], good_stim: training_good_stim[3], trial_type: training_trial_type[3], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], good_stim: training_good_stim[3], trial_type: training_trial_type[3], correct_response: rightASCII}}, // 0 key
]

/* version B stimuli objects */

let trainingB = [
  {stimulusLeft: trainStimB[0], stimulusRight: trainStimB[1], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], good_stim: training_good_stim[0], trial_type: training_trial_type[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimB[1], stimulusRight: trainStimB[0], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], good_stim: training_good_stim[0], trial_type: training_trial_type[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimB[2], stimulusRight: trainStimB[3], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], good_stim: training_good_stim[1], trial_type: training_trial_type[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimB[3], stimulusRight: trainStimB[2], chooseLeft: choiceB, chooseRight: choiceB, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], good_stim: training_good_stim[1], trial_type: training_trial_type[1], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], good_stim: training_good_stim[2], trial_type: training_trial_type[2], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], good_stim: training_good_stim[2], trial_type: training_trial_type[2], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], good_stim: training_good_stim[3], trial_type: training_trial_type[3], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], good_stim: training_good_stim[3], trial_type: training_trial_type[3], correct_response: rightASCII}}, // 0 key
]


/* TEST CONFIG *///

let test_pairs =          ["ab" ,"ae" ,"af" ,"ag" ,"ah" ,"be" ,"bg" ,"cd" ,"ce" ,"cf" ,"cg" ,"ch" ,"de" ,"dg" ,"ef" ,"gh"];
let test_good_stim =      ["a"  ,"a"  ,"a"  ,"a"  ,"a"  ,"e"  ,"g"  ,"c"  ,"c"  ,"c"  ,"c"  ,"c"  ,"e"  ,"g"  ,"e"  ,"g"];

let testStimA = trainStimA;
let testStimB = trainStimB;

/* version A stimuli objects */

let testA = [
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[1],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], good_stim: test_good_stim[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[1],   stimulusRight: testStimA[0],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], good_stim: test_good_stim[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[3],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], good_stim: test_good_stim[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[3],   stimulusRight: testStimA[2],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], good_stim: test_good_stim[1], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[5],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], good_stim: test_good_stim[2], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[5],   stimulusRight: testStimA[4],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], good_stim: test_good_stim[2], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[7],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], good_stim: test_good_stim[3], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[7],   stimulusRight: testStimA[6],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], good_stim: test_good_stim[3], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[8],   stimulusRight: testStimA[9],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], good_stim: test_good_stim[4], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[9],   stimulusRight: testStimA[8],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], good_stim: test_good_stim[4], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[10],  stimulusRight: testStimA[11], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], good_stim: test_good_stim[5], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[11],  stimulusRight: testStimA[10], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], good_stim: test_good_stim[5], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[12],  stimulusRight: testStimA[13], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], good_stim: test_good_stim[6], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[13],  stimulusRight: testStimA[12], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], good_stim: test_good_stim[6], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimA[14],  stimulusRight: testStimA[15], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], good_stim: test_good_stim[7], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimA[15],  stimulusRight: testStimA[14], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], good_stim: test_good_stim[7], correct_response: rightASCII}}, // 0 key
]

/* version B stimuli objects */

let testB = [
  {stimulusLeft: testStimB[0],   stimulusRight: testStimB[1],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], good_stim: test_good_stim[0], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[1],   stimulusRight: testStimB[0],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], good_stim: test_good_stim[0], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[2],   stimulusRight: testStimB[3],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], good_stim: test_good_stim[1], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[3],   stimulusRight: testStimB[2],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], good_stim: test_good_stim[1], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[4],   stimulusRight: testStimB[5],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], good_stim: test_good_stim[2], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[5],   stimulusRight: testStimB[4],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], good_stim: test_good_stim[2], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[6],   stimulusRight: testStimB[7],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], good_stim: test_good_stim[3], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[7],   stimulusRight: testStimB[6],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], good_stim: test_good_stim[3], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[8],   stimulusRight: testStimB[9],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], good_stim: test_good_stim[4], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[9],   stimulusRight: testStimB[8],  chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], good_stim: test_good_stim[4], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[10],  stimulusRight: testStimB[11], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], good_stim: test_good_stim[5], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[11],  stimulusRight: testStimB[10], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], good_stim: test_good_stim[5], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[12],  stimulusRight: testStimB[13], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], good_stim: test_good_stim[6], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[13],  stimulusRight: testStimB[12], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], good_stim: test_good_stim[6], correct_response: rightASCII}}, // 0 key
  {stimulusLeft: testStimB[14],  stimulusRight: testStimB[15], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], good_stim: test_good_stim[7], correct_response: leftASCII}}, // 0 key
  {stimulusLeft: testStimB[15],  stimulusRight: testStimB[14], chooseLeft: choiceA, chooseRight: choiceA, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], good_stim: test_good_stim[7], correct_response: rightASCII}}, // 0 key
]
//var this_seed = new Date().getTime();
//Math.seedrandom(this_seed);

//var randNum = Math.random() * 1000
//var randNumRounded = Math.floor(randNum+1)
