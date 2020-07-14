function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  /* choose stimulus set A or B */
  let version = 'A'
  if(version == 'A') {
    let practice_files = ["field4.bmp","field10.bmp","field13","field17"];
    let training_files = ["Field3.bmp","Field5.bmp","Field14.bmp","Field11.bmp","Field9.bmp","Field12.bmp","Field15.bmp","Field16.bmp"];
  } else {
    let practice_files = ["African_landscape.jpg","closeWater_pines_mountains.jpg","Trees_with_flowers.jpg","wheat_with_farmhouse.jpg"];
    let training_files = ["3d-landscape-background-10.jpg","2822landscape.jpg","lsingeltree_tallergrass_clouds.jpg","orangey_field.jpg","water_fall_images.jpg","water_pines_distantMountains.jpg","water_pines_snowy_moutain.jpg","waterfall_waterBelow.jpg"];
  }
  shuffle(training_files);
  
  let practice_pairs =      ["ab" ,"ef"];
  let practice_validity =   [1.0  ,1.0];
  let practice_good_stim =  ["a"  ,"e"];
  let practice_trial_type = ["win:stay","avoid:lose"];
  
  let training_pairs =      ["ab" ,"cd" ,"ef" ,"gh"];
  let training_validity =   [0.9  ,0.8  ,0.9  ,0.8];
  let training_good_stim =  ["a"  ,"c"  ,"e"  ,"g"];
  let training_trial_type = ["win:stay","win:stay","avoid:lose","avoid:lose"];
  
  let test_pairs =          ["ab" ,"ae" ,"af" ,"ag" ,"ah" ,"be" ,"bg" ,"cd" ,"ce" ,"cf" ,"cg" ,"ch" ,"de" ,"dg" ,"ef" ,"gh"];
  let test_good_stim =      ["a"  ,"a"  ,"a"  ,"a"  ,"a"  ,"e"  ,"g"  ,"c"  ,"c"  ,"c"  ,"c"  ,"c"  ,"e"  ,"g"  ,"e"  ,"g"];
  
  // /* practice arrays: AB,EF */
  // let practice_arrays = [];
  // for (let i = 0; i < practice_pairs.length; i++) {
  //   practice_arrays.push({
  //     condition: 'practice',
  //     stim_pair: practice_pairs[i],
  //     pair_validity: practice_validity[i],
  //     stim_good: practice_stim_good[i],
  //     trial_type: practice_trial_type[i],
  //   })
  
  // /* train arrays: AB,CD,EF,GH */
  // let training_arrays = [];
  // for (let i = 0; i < training_pairs.length; i++) {
  //   training_arrays.push({
  //     condition: 'training',
  //     stim_pair: training_pairs[i],
  //     pair_validity: training_validity[i],
  //     stim_good: training_stim_good[i],
  //     trial_type: training_trial_type[i],
  //     )}
  
  // /* test arrays: AB,AE,AF,AG,AH,BE,BG,CD,CE,CF,CG,CH,DE,DG,EF,GH */
  // let test_arrays = [];
  // for (let i = 0; i < test_pairs.length; i++) {
  //   test_arrays.push({
  //     condition: 'test',
  //     stim_pair: test_pairs[i],
  //     stim_good: test_stim_good[i],
  //     )}
  
  /* create timeline */
  let timeline = [];
  
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
          '<p>[nickel image]</p>'+
          '<p>Because if you keep seeing this feedback:</p>'+
          '<h3 style="color:red;">Not a winner. Try again. =[</h3>'+
          '<p>you probably aren\'t selecting the best picture...</p>'+
          '<p>Press the spacebar continue.</p>',
      '<p>On those trials where you can B) lose money, you will want to select the picture most likely to give this feedback:</p>'+
          '<h3 style="color:blue;">Keep your money.</h3>'+
          '<p>Because if you keep seeing this:</p>'+
          '<p>[crossed out nickel image]</p>'+
          '<p>you probably aren\'t selecting the best picture...</p>',
      '<p>Press the LEFT button to select the picture on the LEFT.</p>'+
          '<p>Press the RIGHT button to select the picture on the RIGHT.</p>'+
          '<p>Press the spacebar continue.</p>'
  ];
  // let instructions = [];
  // for (let i = 0; i < instructions_text.length; i++) {
  //   instructions.push(
  //     type: "html-keyboard-response",
  //     stimulus: instructions_text[i],
  //     choices: [32]
  //   );
  //   timeline.push(instructions[i]);
  //   }
  let instructions_1 = {
    type: "html-keyboard-response",
    stimulus: instructions_text[0],
    choices: [32],
  };
  timeline.push(instructions_1);
  let button_left = '1';
  let button_right = '2';
  let announce_practice = {
      type:  "html-keyboard-response",
      stimulus: '<p>First you will do some practice trials.</p> <p>Press either button when you are ready to begin.</p>',
      choices: [button_left, button_right]
  };
  timeline.push(announce_practice);
  
  /* block of practice trials */
  let number_trials_per_pair = 6;
  let left_or_right = [];
  left_or_right = ['left','left','left','right','right','right'];
  shuffle(left_or_right);
  // for (let i = 0; i < left_or_right.length; i++) {
  //   if(left_or_right == 'left') {
  //   } else {break}
  // }
  
  let training_text = [
    '<p>Great!</p> <p>Press the spacebar to continue.</p>',
    '<p>Now you will see some more pictures.</p>'+
      '<p>Do as before by pressing the LEFT button to choose the picture on the left,</p>'+
      '<p>and pressing the RIGHT button to choose the picture on the right.</p>'+
      '<p>Press the spacebar to continue.</p>',
    '<h3 style="color:blue;">For the picture pairs where you can win money:</h3>'+
      '<p>You will not win every time you choose the "best" picture;</p>'+
      '<p>However, one picture gets rewarded much more often than the other picture.</p>'+
      '<h3 style="color:blue;">For the picture pairs where the best you can do is keep your money:</h3>'+
      '<p>You will not be able to keep your money every time you choose the "best" picture;</p>'+
      '<p>However, one picture allows you to keep your money much more often than the other picture.</p>'+
      '<p>Press the spacebar continue.</p>'
  ]
  let training_instructions = []
  for (let i = 0; i < training_text.length; i++) { 
    training_instructions.push({
      type: "html-keyboard-response",
      stimulus: training_text[i],
      choices: [32]
    });
    timeline.push(training_instructions[i]);
  
  /* block of training trials */
  let announce_new_block = {
    type:  "html-keyboard-response",
    stimulus: '<p>Starting a new block of trials.</p> <p>Press either button when you are ready to begin.</p>',
    choices: [button_left, button_right]
  };
  timeline.push(announce_new_block);
  
  
  /* block of test trials */
  let test_text = [
    '<p>Great!</p>'+
      '<p>Press the spacebar to continue.</p>',
    '<p>It\'s time to test what you\'ve learned!</p>'+
      '<p>During this block of trials you will not be shown whether the object you choose wins money.</p>'+
      '<p>Press the spacebar to continue.</p>',
    '<p>If you see new combinations of objects in this next block, please choose the object that "feels" like more of a winner based on what you have learned during the previous blocks.</p>'+
      '<p>If you\'re not sure which object to pick, just go with your gut instinct!</p>'+
      '<p>Press the spacebar to continue.</p>'
  ]
  let test_instructions = []
  for (let i = 0; i < test_text.length; i++) { 
    test_instructions.push({
      type: "html-keyboard-response",
      stimulus: test_text[i],
      choices: [32]
    });
    timeline.push(test_instructions[i]);
  
  let announce_test = {
    type:  "html-keyboard-response",
    stimulus: '<p>Press either button when you are ready to begin.</p>',
    choices: [button_left, button_right]
  };
  timeline.push(announce_test);
  
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
  let workerID = prompt("Enter your subject id" );
  
  /* start the experiment */
  function startExperiment(){
    jsPsych.init({
      timeline: timeline,
      show_progress_bar: true,
      on_finish: function(){ saveData("pessiglione" + workerID, jsPsych.data.get().csv()); }
      //on_finish: function(){
        //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
          //jsPsych.data.displayData(); 
      //}
    });
  }
  