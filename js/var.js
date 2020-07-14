
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

/* stim paths */

let stimA = [];
for (let i=0; i<pracA.length; i++) {
    stimA.push('stim/a/'+pracA[i]+'.bmp');
}

let stimB = [];
for (let i=0; i<pracB.length; i++) {
    stimB.push('stim/b/'+pracB[i]+'.jpg');
}

/* feedback stimu paths passed by reference */

let feedbackA = [];
let feedbackB = [];

/* fixation dot */

let fixationDot = 'stim/fixation.png';
let blankDot = 'stim/blank.png';


/* version A stimuli objects */

let A = [
  {stimulusLeft: stimA[1], stimulusRight: stimA[0], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
  {stimulusLeft: stimA[2], stimulusRight: stimA[3], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key
  {stimulusLeft: stimA[3], stimulusRight: stimA[2], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
  {stimulusLeft: stimA[0], stimulusRight: stimA[1], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key

]

/* version B stimuli objects */

let B = [
  {stimulusLeft: stimB[0], stimulusRight: stimB[1], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
  {stimulusLeft: stimB[2], stimulusRight: stimB[3], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot ,data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key
  {stimulusLeft: stimB[1], stimulusRight: stimB[0], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
  {stimulusLeft: stimB[3], stimulusRight: stimB[2], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key
]

// let stimB_array = [
//     {stimulusL: stimB[0], stimulusR: stimB[1], data: {test_part: 'practice',pair: practice_pairs[0], validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: ''}},
//     {stimulusL: stimB[2], stimulusR: stimB[3], data: {test_part: 'practice',pair: practice_pairs[1], validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: ''}},
// ]

/* shuffle stim versions A & B */

let shuffleA = jsPsych.randomization.repeat(A, 1); //shuffled array no repeats
let shuffleB = jsPsych.randomization.repeat(B, 1); //shuffled array no repeats

/* EXPERMENTAL CONFIG *///

let training_pairs =      ["ab" ,"cd" ,"ef" ,"gh"];
let training_validity =   [0.9  ,0.8  ,0.9  ,0.8];
let training_good_stim =  ["a"  ,"c"  ,"e"  ,"g"];
let training_trial_type = ["win:stay","win:stay","avoid:lose","avoid:lose"];

let test_pairs =          ["ab" ,"ae" ,"af" ,"ag" ,"ah" ,"be" ,"bg" ,"cd" ,"ce" ,"cf" ,"cg" ,"ch" ,"de" ,"dg" ,"ef" ,"gh"];
let test_good_stim =      ["a"  ,"a"  ,"a"  ,"a"  ,"a"  ,"e"  ,"g"  ,"c"  ,"c"  ,"c"  ,"c"  ,"c"  ,"e"  ,"g"  ,"e"  ,"g"];


//var this_seed = new Date().getTime();
//Math.seedrandom(this_seed);

//var randNum = Math.random() * 1000
//var randNumRounded = Math.floor(randNum+1)
