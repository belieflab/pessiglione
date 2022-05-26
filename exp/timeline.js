/* create timeline */
let timeline = [];

/* add instructions to timeline */
let instructions = [];

/* announce start of practice trials */
let practiceStart = {
    type:  "html-keyboard-response",
    stimulus: '<p>First, you will do some practice trials.</p> <p><i>Press either response button when you are ready to begin.</i></p>',
    choices: [leftASCII, rightASCII],
//    on_finish: versionSelect(),
  };
  
  // create fixation dot
  let fixation = {
  //  data: {test_part: 'fixation'},
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
              var html="<img src='"+jsPsych.timelineVariable('stimulusLeft', true)+"' width='750px' height='500px'>" +
              "<img style='width:200px; height:200px; margin-bottom: 0px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>" +
              "<img src='"+jsPsych.timelineVariable('stimulusRight', true)+"' width='750px' height='500px'>";
              return html;
    }, 
    choices: [leftASCII, rightASCII],
    response_ends_trial: true,
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      data.subjectkey = GUID;
      data.src_subject_id = workerId;
      data.site = siteNumber;
      data.interview_date = today;
      data.interview_age = ageAtAssessment;
      data.sex = sexAtBirth;
      data.phenotype = groupStatus;
      data.handedness = handedness;
      data.task_version = reward;
      data.task_condition = version;
      test_part = jsPsych.data.get().last().values()[0].test_part;
      if (test_part === 'practice') {
        data.index = practiceIterator;
        practiceIterator--;
        data.block = 1;
        if (practiceIterator === numberOfPracticeTrials+1) {
          practiceIterator = -1;
        }
      } else if (test_part === 'training') {
        data.index = indexIterator;
        indexIterator++;
        data.block = blockIterator;
        if (indexIterator === numberOfTrainingTrials+1) {
          indexIterator = 1;
          blockIterator++;
        }
      } else if (test_part === 'transfer') {
        data.index = indexIterator;
        indexIterator++;
        data.block = 5;
      }
      pair_set = jsPsych.data.get().last().values()[0].pair_set;
      pair_validity = jsPsych.data.get().last().values()[0].pair_validity;
      trial_validity = jsPsych.data.get().last().values()[0].trial_validity;
      pair_trials_per_block = jsPsych.data.get().last().values()[0].pair_trials_per_block;
      reward_type = jsPsych.data.get().last().values()[0].reward_type;
      pair_best_choice = jsPsych.data.get().last().values()[0].pair_best_choice;
      correct_response = jsPsych.data.get().last().values()[0].correct_response;
      participant_response = jsPsych.data.get().last().values()[0].key_press;
      stim_left = jsPsych.data.get().last().values()[0].stim_left;
      stim_right = jsPsych.data.get().last().values()[0].stim_right;
      stim_best_choice = jsPsych.data.get().last().values()[0].stim_best_choice;
      if (trial_validity === 'valid') {
        if (reward_type === 'win:stay') {
          if (data.key_press === data.correct_response) {
//            console.log('correct');
            data.accuracy = 1;
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[0]); //they win a nickel
              data.reward_tally = rewardTally +=(0.05);
              // document.getElementById("rewardCounter").innerHTML = rewardTally+=(0.05);
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[0]); //they win points
              data.reward_tally = rewardTally +=(5);
              // document.getElementById("rewardCounter").innerHTML = rewardTally+=(5);
            }
          } else if (data.key_press !== data.correct_response) {
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[1]); //they win nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[1]); //they win nothing
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
              data.reward_tally = rewardTally;
            }
//            console.log('incorrect');
            data.accuracy = 0;
          }
       } else if (reward_type === 'avoid:lose') {
          if (data.key_press === data.correct_response) {
//            console.log('correct');
            data.accuracy = 1;
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[2]); //they lose nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[2]); //they lose nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            }
          } else if (data.key_press !== data.correct_response) {
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[3]); //they lose a nickel
              data.reward_tally = rewardTally -=(0.05);
            } else if (reward == 'points') {
              // document.getElementById("rewardCounter").innerHTML = rewardTally-=(0.05);
              feedbackContainer.push(feedbackOptionsPoints[3]); //they lose points
              data.reward_tally = rewardTally -=(5);
              // document.getElementById("rewardCounter").innerHTML = rewardTally-=(5);
            }
//            console.log('incorrect');
            data.accuracy = 0;
          }
        }
      } else if (trial_validity === 'invalid') {
        if (reward_type === 'win:stay') {
          if (data.key_press === data.correct_response) {
//            console.log('technically correct');
            data.accuracy = 1;
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[1]); //they win nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[1]); //they win nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            }
          } else if (data.key_press !== data.correct_response) {
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[0]); //they win a nickel
              data.reward_tally = rewardTally +=(0.05);
              // document.getElementById("rewardCounter").innerHTML = rewardTally+=(0.05);
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[0]); //they win points
              data.reward_tally = rewardTally +=(5);
              // document.getElementById("rewardCounter").innerHTML = rewardTally+=(5);
            }
//            console.log('technically incorrect');
            data.accuracy = 0;
          }
       } else if (reward_type === 'avoid:lose') {
          if (data.key_press === data.correct_response) {
//            console.log('technically correct');
            data.accuracy = 1;
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[3]); //they lose a nickel
              data.reward_tally = rewardTally -=(0.05);
              // document.getElementById("rewardCounter").innerHTML = rewardTally-=(0.05);
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[3]); //they lose points
              data.reward_tally = rewardTally -=(5);
              // document.getElementById("rewardCounter").innerHTML = rewardTally-=(5);
            }
          } else if (data.key_press !== data.correct_response) {
            feedbackContainer.pop();
            if (reward == 'money') {
              feedbackContainer.push(feedbackOptionsMoney[2]); //they lose nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            } else if (reward == 'points') {
              feedbackContainer.push(feedbackOptionsPoints[2]); //they lose nothing
              data.reward_tally = rewardTally;
              // document.getElementById("rewardCounter").innerHTML = rewardTally;
            }
//            console.log('technically incorrect');
            data.accuracy = 0;
          }
        }
      }
      data.stim_feedback = feedbackContainer[0].slice(5);
      data.stim_set = version;
      data.reward_set = reward;
//      console.log(pair_validity,trial_validity,pair_trials_per_block,reward_type,pair_best_choice,correct_response,participant_response,stim_left,stim_right,stim_best_choice,stim_feedback);
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
    type: 'html-keyboard-response',
    stimulus: function() {
      let participantResponse = jsPsych.data.get().last(1).values()[0].key_press;
      if (participantResponse == leftASCII) { // if last correct_response == 49 (1 key)
        var html = "<img style='border: 5px solid #808080;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"' width='750px' height='500px'>" +
          "<img style='width:150px; height:150px; padding-right: 50px; padding-left: 50px; margin-bottom: 25px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
          "<img style='border: 5px solid #ffffff;  padding-left:15px;' src='"+jsPsych.timelineVariable('stimulusRight', true)+"' width='750px' height='500px'>";
        return html
      } else if (participantResponse == rightASCII) { // if last correct_response == 48 (0 key)
        var html = "<img style='border: 5px solid #ffffff; padding-right:15px;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"' width='750px' height='500px'>"+
          "<img style='width:150px; height:150px; padding-right: 50px; padding-left: 50px; margin-bottom: 25px;' src='"+jsPsych.timelineVariable('trialFeedback', true)+"'>" +
          "<img style='border: 5px solid #808080;'src='"+jsPsych.timelineVariable('stimulusRight', true)+"' width='750px' height='500px'>";
        return html
      }
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    response_ends_trial: false,
    post_trial_gap: 500, //ISI
    on_finish: function(data){}
  };

    // acknowledge participant response during test phase, but more briefly than prior feedback
    let feedback_testphase = {
      type: 'html-keyboard-response',
      stimulus: function() {
        let participantResponse = jsPsych.data.get().last(1).values()[0].key_press;
        if (participantResponse == leftASCII) { // if last correct_response == 49 (1 key)
          var html = "<img style='border: 5px solid #808080;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"' width='750px' height='500px'>" +
            "<img style='width:200px; height:200px; margin-bottom: 5px; padding-left:20px; padding-right:20px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>" +
            "<img style='border: 5px solid #ffffff;' src='"+jsPsych.timelineVariable('stimulusRight', true)+"' width='750px' height='500px'>";
          return html
        } else if (participantResponse == rightASCII) { // if last correct_response == 48 (0 key)
          var html = "<img style='border: 5px solid #ffffff;' src='"+jsPsych.timelineVariable('stimulusLeft', true)+"' width='750px' height='500px'>"+
            "<img style='width:200px; height:200px; margin-bottom: 5px; padding-left:20px; padding-right:20px;' src='"+jsPsych.timelineVariable('fixation', true)+"'>" +
            "<img style='border: 5px solid #808080;' src='"+jsPsych.timelineVariable('stimulusRight', true)+"' width='750px' height='500px'>";
          return html
        }
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 200,
      response_ends_trial: false,
      post_trial_gap: 300, //ISI
      on_finish: function(data){}
    };
  
    let save_data = {
      type: "html-keyboard-response",
      stimulus: "<p>Data saving...</p>"+
      '<div class="sk-cube-grid">'+
    '<div class="sk-cube sk-cube1"></div>'+
    '<div class="sk-cube sk-cube2"></div>'+
    '<div class="sk-cube sk-cube3"></div>'+
    '<div class="sk-cube sk-cube4"></div>'+
    '<div class="sk-cube sk-cube5"></div>'+
    '<div class="sk-cube sk-cube6"></div>'+
    '<div class="sk-cube sk-cube7"></div>'+
    '<div class="sk-cube sk-cube8"></div>'+
    '<div class="sk-cube sk-cube9"></div>'+
    '</div>'+
      "<p>Do not close this window until the text dissapears.</p>",
    
      choices: jsPsych.NO_KEYS,
      trial_duration: 5000,
      on_finish: function(){
        saveData("pessiglione_" + workerId, jsPsych.data.get().csv());
        document.getElementById("unload").onbeforeunload='';
        $(document).ready(function(){
        $("body").addClass("showCursor"); // returns cursor functionality
        closeFullscreen(); // kill fullscreen
    });

      }
    };
    
    let end = {
      type: "html-keyboard-response",
      stimulus:   "<p>Thank you!</p>"+
      "<p>You have successfully completed the experiment and your data has been saved.</p>"+
      "<p>To leave feedback on this task, please click the following link:</p>"+
      "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
      // "<p>Please wait for the experimenter to continue.</p>"+
      "<p><i>You may now close the expriment window at anytime.</i></p>",
      choices: jsPsych.NO_KEYS,
      // trial_duration: 60000,
      on_load: function(){
        if (reward === "money"){
          alert("You won: $ "+rewardTally+"!");
      } else if (reward === 'points'){
        alert("You won: "+rewardTally+" points!");
      }
      }
    };
    