let workerID = prompt("Enter your subject id" );

/* choose stimulus set A or B */
// let version = 'A'
// if(version == 'A') {
//     let practice_files = ["stim/field4.bmp","stim/field10.bmp","stim/field13.bmp","stim/field17.bmp"];
//     let training_files = ["stim/Field3.bmp","stim/Field5.bmp","stim/Field14.bmp","stim/Field11.bmp","stim/Field9.bmp","stim/Field12.bmp","stim/Field15.bmp","stim/Field16.bmp"];
//     } else {
//         let practice_files = ["stim/African_landscape.jpg","stim/closeWater_pines_mountains.jpg","stim/Trees_with_flowers.jpg","stim/wheat_with_farmhouse.jpg"];
//         let training_files = ["stim/3d-landscape-background-10.jpg","stim/2822landscape.jpg","stim/lsingeltree_tallergrass_clouds.jpg","stim/orangey_field.jpg","stim/water_fall_images.jpg","stim/water_pines_distantMountains.jpg","stim/water_pines_snowy_moutain.jpg","stim/waterfall_waterBelow.jpg"];
//     }
// shuffle(training_files);

/* create timeline */
let timeline = [];

/* define selection buttons */
let button_left = '1';
let button_right = '2';

/* feed instructions to timeline */
let instructions_text = [
  '<h3 style="color:blue;">Welcome to the experiment!</h3>'+
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
      '<img src="stim/win.bmp"></img>'+
      '<p>Because if you keep seeing this feedback:</p>'+
      '<h3 style="color:red;">Not a winner. Try again. =[</h3>'+
      '<p>you probably aren\'t selecting the best picture...</p>'+
      '<p>Press the spacebar continue.</p>',
  '<p>On those trials where you can B) lose money, you will want to select the picture most likely to give this feedback:</p>'+
      '<h3 style="color:blue;">Keep your money.</h3>'+
      '<p>Because if you keep seeing this:</p>'+
      '<img src="stim/lose.bmp"></img>'+
      '<p>you probably aren\'t selecting the best picture...</p>',
  '<p>Press the LEFT button to select the picture on the LEFT.</p>'+
      '<p>Press the RIGHT button to select the picture on the RIGHT.</p>'+
      '<p>Press the spacebar continue.</p>'
];
let instructions = [];

for (let i = 0; i < instructions_text.length; i++) {
  instructions.push({
    type: "html-keyboard-response",
    stimulus: instructions_text[i],
    choices: [32]
  });
  timeline.push(instructions[i]);
  }

let announce_practice = {
  type:  "html-keyboard-response",
  stimulus: '<p>First you will do some practice trials.</p> <p>Press either button when you are ready to begin.</p>',
  choices: [button_left, button_right]
};
timeline.push(announce_practice);


let practice_pairs =      ["ab" ,"ef"];
let practice_validity =   [1.0  ,1.0];
let practice_good_stim =  ["a"  ,"e"];
let practice_trial_type = ["win:stay","avoid:lose"];




/* START TRAINING TRIAL FOR PARTICIPANTS */
let pracA = ['Field4','Field10','Field13','Field17'];
let pracB = ['African_landscape','closeWater_pines_mountains','Trees_with_flowers','wheat_with_farmhouse'];

let stimA = [];
for (let i=0; i<pracA.length; i++) {
    stimA.push('stim/a/'+pracA[i]+'.bmp');
}

let stimB = [];
for (let i=0; i<pracB.length; i++) {
    stimB.push('stim/b/'+pracB[i]+'.jpg');
}


let stimA_array = [
  {stimulus: stimA[0], stimulus2: stimA[1], data: {test_part: 'practice', correct_response: 49}}, // 0 key
  {stimulus: stimA[2], stimulus2: stimA[3], data: {test_part: 'practice', correct_response: 50}}, // 0 key
]

let stimB_array = [
  {stimulus: stimB[0], stimulus2: stimB[1], data: {test_part: 'practice', correct_response: 49}}, // 0 key
  {stimulus: stimB[2], stimulus2: stimB[3], data: {test_part: 'practice', correct_response: 50}}, // 0 key
]

// let stimB_array = [
//     {stimulusL: stimB[0], stimulusR: stimB[1], data: {test_part: 'practice',pair: practice_pairs[0], validity: practice_validity[0], good_stim: practice_good_stim[0], trial_type: practice_trial_type[0], correct_response: ''}},
//     {stimulusL: stimB[2], stimulusR: stimB[3], data: {test_part: 'practice',pair: practice_pairs[1], validity: practice_validity[1], good_stim: practice_good_stim[1], trial_type: practice_trial_type[1], correct_response: ''}},
// ]


let stimA_shuffle = jsPsych.randomization.repeat(stimA_array, 1); //shuffled array no repeats
let stimB_shuffle = jsPsych.randomization.repeat(stimB_array, 1); //shuffled array no repeats


// create fixation point
let fixation = {
  data: {test_part: 'fixation'},
  type: 'html-keyboard-response',
  stimulus: '<div style="color:black; font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 500,
}

// create  trials
let stimuli = {
  type: "html-keyboard-response",
  stimulus: function(){
            var html="<img src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
            "<img src='"+jsPsych.timelineVariable('stimulus2', true)+"'>";
            return html;
  }, 
  
  // jsPsych.timelineVariable('stimulus'),
  choices: [49, 50], // [0 key , 1 key]
  trial_duration: 3000,
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
  }
};


// inter-stimulus interval
let isi = [1000, 5000];

// create feedback trials
let feedback = {
  data: {test_part: 'feedback'},
  type: 'html-keyboard-response',
  // stimulus: function() {
  //     let last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;
  //     if (last_trial_accuracy == 1) {
  //         return '<div style="color:red; font-size:60px;">ALLERGIC REACTION!</div>'
  //     } else {
  //         return '<div style="color:green; font-size:60px;">NO REACTION</div>'
  //     }
  //   },
  stimulus: function() {
    let participantResponse = jsPsych.data.get().last(1).values()[0].key_press;
    if (participantResponse == 49) { // if last correct_response == 49 (1 key)
      return "<img style='border: 5px solid #555;'src='"+jsPsych.timelineVariable('stimulus', true)+"'>" +
             "<img src='"+jsPsych.timelineVariable('stimulus2', true)+"'>";
    } else if (participantResponse == 50) { // if last correct_response == 48 (0 key)
      return "<img src='"+jsPsych.timelineVariable('stimulus', true)+"'>"+
             "<img style='border: 5px solid #555;'src='"+jsPsych.timelineVariable('stimulus2', true)+"'>";
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

let practice_procedure = {
  timeline: [fixation, stimuli, feedback],
  timeline_variables: stimA_array,
  randomize_order: false,
}

timeline.push(practice_procedure);

















let training_pairs =      ["ab" ,"cd" ,"ef" ,"gh"];
let training_validity =   [0.9  ,0.8  ,0.9  ,0.8];
let training_good_stim =  ["a"  ,"c"  ,"e"  ,"g"];
let training_trial_type = ["win:stay","win:stay","avoid:lose","avoid:lose"];

let test_pairs =          ["ab" ,"ae" ,"af" ,"ag" ,"ah" ,"be" ,"bg" ,"cd" ,"ce" ,"cf" ,"cg" ,"ch" ,"de" ,"dg" ,"ef" ,"gh"];
let test_good_stim =      ["a"  ,"a"  ,"a"  ,"a"  ,"a"  ,"e"  ,"g"  ,"c"  ,"c"  ,"c"  ,"c"  ,"c"  ,"e"  ,"g"  ,"e"  ,"g"];

// let stimA = [];
// let stimB = [];

// COMPLETION MESSAGE: Completed Classification Phase
// var link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId="
let thankyou = {
  type: "html-keyboard-response",
  stimulus: '<p">Thank you.</p>', 
      // +"<a href=" + link + ' target="_blank">' + link + "</a>",
  // choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
};
timeline.push(thankyou);



/* END PHASE II OF TASK: CLASSIFICATION and ANTICIPATION PHASE */



//var this_seed = new Date().getTime();
//Math.seedrandom(this_seed);

//var randNum = Math.random() * 1000
//var randNumRounded = Math.floor(randNum+1)
function getParamFromURL(name)
{
  name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
  let regexS = "[\?&]"+name+"=([^&#]*)";
  let regex = new RegExp( regexS );
  let results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}


/* start the experiment */
function startExperiment(){
  jsPsych.init({
    timeline: timeline,
    show_progress_bar: true,
    preload_images: [stimA, stimB],
    on_finish: function(){ saveData("pessiglione" + workerID, jsPsych.data.get().csv()); }
    //on_finish: function(){
      //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
        //jsPsych.data.displayData(); 
    //}
  });
}
