  //******************************************/
 //   PESSIGLIONNE                           /
//******************************************/

/* enable subjectID prompt */
let workerID = prompt("Enter your subject id" );

/* set task version */
const version = 'A';
//const version = 'B';

/* Adjust Response Keys */
let leftASCII= 49;
let rightASCII = 50;

let leftKeycap = '1';
let rightKeycap = '2';

// define inter-stimulus interval
let isi = [1000, 5000];

/* feed instructions into timeline */
let instructionsText = [

    '<h3 style="color:#0ed145;">Welcome to the experiment!</h3>'+
        '<p>Press the spacebar continue.</p>',

    '<p>In this task you will see two pictures side-by-side on the computer screen.</p>'+
        '<p>In each pair of pictures you see on the screen, one picture will be better than the other.</p>'+
        '<p>You need to figure out which picture in each pair is the better one.</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>The better picture in each pair will be more likely to either</p>'+
        '<p>A) win you some money,</p>'+
        '<p>or</p>'+
        '<p>B) allow you to keep the money you\'ve already earned.</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>On those trials where you can A) win money, you will want to select the picture most likely to earn a nickel:</p>'+
        '<img style="height:100px; width:100px" src="stim/win.bmp"></img>'+
        '<p>Because if you keep seeing this feedback:</p>'+
        '<h3 style="color:red;">Not a winner. Try again. =[</h3>'+
        '<p>you probably aren\'t selecting the best picture...</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>On those trials where you can B) lose money, you will want to select the picture most likely to give this feedback:</p>'+
        '<h3 style="color:blue;">Keep your money.</h3>'+
        '<p>Because if you keep seeing this:</p>'+
        '<img style="height:100px; width:100px" src="stim/lose.bmp"></img>'+
        '<p>you probably aren\'t selecting the best picture...</p>',

    '<p>Press the LEFT button to select the picture on the LEFT.</p>'+
        '<p>Press the RIGHT button to select the picture on the RIGHT.</p>'+
        '<p>Press the spacebar continue.</p>'
];

// Qualtrics survery link 
let link;
//link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId=";



///////////////////////////////////////////////////////////////////////////////////////////////////////
/*  make sure you know what you are doing with these rods and levers; you may break the experiment  */
/////////////////////////////////////////////////////////////////////////////////////////////////////

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

let fixationDot = 'stim/dot_green.png';
let blankDot = 'stim/dot_white.png';


/* version A stimuli objects */

let stimA_array = [
  {stimulusLeft: stimA[0], stimulusRight: stimA[1], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
  {stimulusLeft: stimA[2], stimulusRight: stimA[3], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key
  {stimulusLeft: stimA[1], stimulusRight: stimA[0], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: rightASCII}}, // 0 key
  {stimulusLeft: stimA[3], stimulusRight: stimA[2], feedbackLeft: feedbackA, feedbackRight: feedbackA, fixation: fixationDot, data: {test_part: 'practice', correct_response: leftASCII}}, // 0 key
]

/* version B stimuli objects */

let stimB_array = [
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

let stimA_shuffle = jsPsych.randomization.repeat(stimA_array, 1); //shuffled array no repeats
let stimB_shuffle = jsPsych.randomization.repeat(stimB_array, 1); //shuffled array no repeats



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