
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /// *  make sure you know what you are doing with these buttons and levers; you may break the experiment  * ///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let practiceIterator = -1;
let indexIterator = 1;
let blockIterator = 0;
let version;
let reward;

  /////////////////////////
 // * PRACTICE CONFIG * //
/////////////////////////

let practice_pairs =      ['ab', 'ef'];
let practice_validity =   [1.0, 1.0];
let practice_pairsPerBlock = 6; //12 total practice trials, 6 for each pair
let practice_good_stim =  ['a', 'e'];
let practice_trial_type = ['win:stay', 'avoid:lose'];
let numberOfPracticeTrials = practice_pairs.length * practice_pairsPerBlock

let validity_values =     ['valid', 'invalid'];
let leftright_values =    ['left', 'right'];

/* practice stim versions A & B */
const pracA = ['Field4','Field10','Field13','newfield'];
const pracB = ['African_landscape','closeWater_pines_mountains','Trees_with_flowers','wheat_with_farmhouse'];
const trainA = ['Field3','Field5','Field14','Field11','Field9','Field12','Field15','Field16'];
const trainB = ['3d-landscape-background-10','2822landscape','lsingeltree_tallergrass_clouds','orangey_field','water_fall_images','water_pines_distantMountains','water_pines_snowy_moutain','waterfall_waterBelow'];

/* shuffle the training stimuli */
let trainA_shuffle = jsPsych.randomization.repeat(trainA, 1); //shuffled array no repeats
let trainB_shuffle = jsPsych.randomization.repeat(trainB, 1); //shuffled array no repeats

/* stim paths */
let pracStimA = [];
for (let i=0; i<pracA.length; i++) {
    pracStimA.push('stim/a/'+pracA[i]+'.bmp');
}
let pracStimB = [];
for (let i=0; i<pracB.length; i++) {
    pracStimB.push('stim/b/'+pracB[i]+'.jpg');
}


/* particpant choice containers */
let choice = [];
//let feedbackOptions = ['stim/winwin.bmp', 'stim/not_winner.png', 'stim/keep_money.png', 'stim/loselose.bmp'];
let feedbackOptionsMoney = ['stim/winwin.bmp', 'stim/not_winner.png', 'stim/keep_money.png', 'stim/loselose.bmp'];
let feedbackOptionsPoints = ['stim/winpoints.bmp', 'stim/not_winner.png', 'stim/keep_points.png', 'stim/losepoints.bmp'];
let feedbackContainer = [];
// let upcoming_feedback;

/* fixation dot */
let fixationDot = 'stim/fixation.png';
let blankDot = 'stim/blank.png';

/* prepare a full block of practice stimuli objects */

let practiceA = []
let practiceB = []
let leftright_ab = jsPsych.randomization.repeat(['left','left','left','right','right','right'], 1);
let leftright_ef = jsPsych.randomization.repeat(['left','left','left','right','right','right'], 1);
// shuffle the order of the pairs within the block
// shuffle whether the good_stim in each pair appears on the left or right
// do the above two steps for as many repetitions as their are pairsPerBlock
for (let j=0; j<practice_pairsPerBlock; j++) {
  
  let practice_pairs_shuffle               = jsPsych.randomization.repeat(practice_pairs, 1);
  
  for (let i=0; i<practice_pairs_shuffle.length; i++) {
    if (practice_pairs_shuffle[i] == 'ab') { // ab pair
      if (leftright_ab[j] == 'left') { // good stim on left
        practiceA.push({stimulusLeft: pracStimA[0], stimulusRight: pracStimA[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[0], reward_type: practice_trial_type[0], correct_response: leftASCII, stim_left: pracStimA[0].slice(7), stim_right: pracStimA[1].slice(7), stim_best_choice: pracStimA[0].slice(7)}});
        practiceB.push({stimulusLeft: pracStimB[0], stimulusRight: pracStimB[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[0], reward_type: practice_trial_type[0], correct_response: leftASCII, stim_left: pracStimB[0].slice(7), stim_right: pracStimB[1].slice(7), stim_best_choice: pracStimB[0].slice(7)}});
      } else if (leftright_ab[j] == 'right') { // good stim on right
        practiceA.push({stimulusLeft: pracStimA[1], stimulusRight: pracStimA[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[0], reward_type: practice_trial_type[0], correct_response: rightASCII, stim_left: pracStimA[1].slice(7), stim_right: pracStimA[0].slice(7), stim_best_choice: pracStimA[0].slice(7)}});
        practiceB.push({stimulusLeft: pracStimB[1], stimulusRight: pracStimB[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[0], pair_validity: practice_validity[0], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[0], reward_type: practice_trial_type[0], correct_response: rightASCII, stim_left: pracStimB[1].slice(7), stim_right: pracStimB[0].slice(7), stim_best_choice: pracStimB[0].slice(7)}});
      }
    } else if (practice_pairs_shuffle[i] == 'ef') { // ef pair
      if (leftright_ef[j] == 'left') { // good stim on left
        practiceA.push({stimulusLeft: pracStimA[2], stimulusRight: pracStimA[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[1], reward_type: practice_trial_type[1], correct_response: leftASCII, stim_left: pracStimA[2].slice(7), stim_right: pracStimA[3].slice(7), stim_best_choice: pracStimA[2].slice(7)}});
        practiceB.push({stimulusLeft: pracStimB[2], stimulusRight: pracStimB[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[1], reward_type: practice_trial_type[1], correct_response: leftASCII, stim_left: pracStimB[2].slice(7), stim_right: pracStimB[3].slice(7), stim_best_choice: pracStimB[2].slice(7)}});
      } else if (leftright_ef[j] == 'right') { // good stim on right
        practiceA.push({stimulusLeft: pracStimA[3], stimulusRight: pracStimA[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[1], reward_type: practice_trial_type[1], correct_response: rightASCII, stim_left: pracStimA[3].slice(7), stim_right: pracStimA[2].slice(7), stim_best_choice: pracStimA[2].slice(7)}});
        practiceB.push({stimulusLeft: pracStimB[3], stimulusRight: pracStimB[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'practice', pair: practice_pairs[1], pair_validity: practice_validity[1], trial_validity: validity_values[0], pair_trials_per_block: practice_pairsPerBlock, pair_best_choice: practice_good_stim[1], reward_type: practice_trial_type[1], correct_response: rightASCII, stim_left: pracStimB[3].slice(7), stim_right: pracStimB[2].slice(7), stim_best_choice: pracStimB[2].slice(7)}});
      }
    }
  };
};
  /////////////////////////
 // * TRAINING CONFIG * //
/////////////////////////

let training_pairs =      ['ab','cd','ef','gh'];
let training_validity =   [0.9  ,0.8  ,0.9  ,0.8];
let training_pairsPerBlock = 10; //40 total training trials per block of training, 10 trials for each pair
let training_good_stim =  ['a'  ,'c'  ,'e'  ,'g'];
let training_trial_type = ['win:stay','win:stay','avoid:lose','avoid:lose'];
let numberOfTrainingTrials = training_pairs.length * training_pairsPerBlock

/* stim paths */

let trainStimA = [];
for (let i=0; i<trainA.length; i++) {
    trainStimA.push('stim/a/'+trainA[i]+'.bmp');
}

let trainStimB = [];
for (let i=0; i<trainB.length; i++) {
    trainStimB.push('stim/b/'+trainB[i]+'.jpg');
}

/* prepare a full block of practice stimuli objects */

let trainingA1 = []
let trainingB1 = []
let trainingA2 = []
let trainingB2 = []
let trainingA3 = []
let trainingB3 = []
let trainingA4 = []
let trainingB4 = []
let leftright_train_ab = jsPsych.randomization.repeat(['left','left','left','left','left','right','right','right','right','right'], 1);
let leftright_train_cd = jsPsych.randomization.repeat(['left','left','left','left','left','right','right','right','right','right'], 1);
let leftright_train_ef = jsPsych.randomization.repeat(['left','left','left','left','left','right','right','right','right','right'], 1);
let leftright_train_gh = jsPsych.randomization.repeat(['left','left','left','left','left','right','right','right','right','right'], 1);
let validity_ab = jsPsych.randomization.repeat(['invalid','valid','valid','valid','valid','valid','valid','valid','valid','valid'], 1);
let validity_cd = jsPsych.randomization.repeat(['invalid','invalid','valid','valid','valid','valid','valid','valid','valid','valid'], 1);
let validity_ef = jsPsych.randomization.repeat(['invalid','valid','valid','valid','valid','valid','valid','valid','valid','valid'], 1);
let validity_gh = jsPsych.randomization.repeat(['invalid','invalid','valid','valid','valid','valid','valid','valid','valid','valid'], 1);
// shuffle the order of the pairs within the block
// shuffle whether the good_stim in each pair appears on the left or right
// do the above two steps for as many repetitions as their are pairsPerBlock
let training_pairs_shuffle = []
for (let j=0; j<training_pairsPerBlock; j++) {

  training_pairs_shuffle = jsPsych.randomization.repeat(training_pairs, 1);

  for (let i=0; i<training_pairs_shuffle.length; i++) {
    if (training_pairs_shuffle[i] == 'ab') { // ab pair
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ab[j], validity_ab[j])
      if (leftright_train_ab[j] == 'left') { // good stim on left
        trainingA1.push({stimulusLeft: trainStimA[0], stimulusRight: trainStimA[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimA[0].slice(7), stim_right: trainStimA[1].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[0], stimulusRight: trainStimB[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimB[0].slice(7), stim_right: trainStimB[1].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      } else if (leftright_train_ab[j] == 'right') {
        trainingA1.push({stimulusLeft: trainStimA[1], stimulusRight: trainStimA[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimA[1].slice(7), stim_right: trainStimA[0].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[1], stimulusRight: trainStimB[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimB[1].slice(7), stim_right: trainStimB[0].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'cd') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_cd[j], validity_cd[j])
      if (leftright_train_cd[j] == 'left') { // good stim on left
        trainingA1.push({stimulusLeft: trainStimA[2], stimulusRight: trainStimA[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimA[2].slice(7), stim_right: trainStimA[3].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[2], stimulusRight: trainStimB[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimB[2].slice(7), stim_right: trainStimB[3].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      } else if (leftright_train_cd[j] == 'right') {
        trainingA1.push({stimulusLeft: trainStimA[3], stimulusRight: trainStimA[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimA[3].slice(7), stim_right: trainStimA[2].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[3], stimulusRight: trainStimB[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimB[3].slice(7), stim_right: trainStimB[2].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'ef') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ef[j], validity_ef[j])
      if (leftright_train_ef[j] == 'left') { // good stim on left
        trainingA1.push({stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimA[4].slice(7), stim_right: trainStimA[5].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[4], stimulusRight: trainStimB[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimB[4].slice(7), stim_right: trainStimB[5].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      } else if (leftright_train_ef[j] == 'right') {
        trainingA1.push({stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimA[5].slice(7), stim_right: trainStimA[4].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[5], stimulusRight: trainStimB[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimB[5].slice(7), stim_right: trainStimB[4].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'gh') {
  //    console.log(j, i, training_pairs_shuffle[i], leftright_train_gh[j], validity_gh[j])
      if (leftright_train_gh[j] == 'left') { // good stim on left
        trainingA1.push({stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[6], stimulusRight: trainStimB[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      } else if (leftright_train_gh[j] == 'right') {
        trainingA1.push({stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB1.push({stimulusLeft: trainStimB[7], stimulusRight: trainStimB[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      }
    }
  };

  training_pairs_shuffle = jsPsych.randomization.repeat(training_pairs, 1);

  for (let i=0; i<training_pairs_shuffle.length; i++) {
    if (training_pairs_shuffle[i] == 'ab') { // ab pair
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ab[j], validity_ab[j])
      if (leftright_train_ab[j] == 'left') { // good stim on left
        trainingA2.push({stimulusLeft: trainStimA[0], stimulusRight: trainStimA[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimA[0].slice(7), stim_right: trainStimA[1].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[0], stimulusRight: trainStimB[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimB[0].slice(7), stim_right: trainStimB[1].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      } else if (leftright_train_ab[j] == 'right') {
        trainingA2.push({stimulusLeft: trainStimA[1], stimulusRight: trainStimA[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimA[1].slice(7), stim_right: trainStimA[0].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[1], stimulusRight: trainStimB[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimB[1].slice(7), stim_right: trainStimB[0].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'cd') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_cd[j], validity_cd[j])
      if (leftright_train_cd[j] == 'left') { // good stim on left
        trainingA2.push({stimulusLeft: trainStimA[2], stimulusRight: trainStimA[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimA[2].slice(7), stim_right: trainStimA[3].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[2], stimulusRight: trainStimB[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimB[2].slice(7), stim_right: trainStimB[3].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      } else if (leftright_train_cd[j] == 'right') {
        trainingA2.push({stimulusLeft: trainStimA[3], stimulusRight: trainStimA[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimA[3].slice(7), stim_right: trainStimA[2].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[3], stimulusRight: trainStimB[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimB[3].slice(7), stim_right: trainStimB[2].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'ef') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ef[j], validity_ef[j])
      if (leftright_train_ef[j] == 'left') { // good stim on left
        trainingA2.push({stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimA[4].slice(7), stim_right: trainStimA[5].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[4], stimulusRight: trainStimB[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimB[4].slice(7), stim_right: trainStimB[5].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      } else if (leftright_train_ef[j] == 'right') {
        trainingA2.push({stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimA[5].slice(7), stim_right: trainStimA[4].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[5], stimulusRight: trainStimB[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimB[5].slice(7), stim_right: trainStimB[4].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'gh') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_gh[j], validity_gh[j])
      if (leftright_train_gh[j] == 'left') { // good stim on left
        trainingA2.push({stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[6], stimulusRight: trainStimB[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      } else if (leftright_train_gh[j] == 'right') {
        trainingA2.push({stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB2.push({stimulusLeft: trainStimB[7], stimulusRight: trainStimB[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      }
    }
  };

  training_pairs_shuffle = jsPsych.randomization.repeat(training_pairs, 1);
 
  for (let i=0; i<training_pairs_shuffle.length; i++) {
    if (training_pairs_shuffle[i] == 'ab') { // ab pair
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ab[j], validity_ab[j])
      if (leftright_train_ab[j] == 'left') { // good stim on left
        trainingA3.push({stimulusLeft: trainStimA[0], stimulusRight: trainStimA[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimA[0].slice(7), stim_right: trainStimA[1].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[0], stimulusRight: trainStimB[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimB[0].slice(7), stim_right: trainStimB[1].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      } else if (leftright_train_ab[j] == 'right') {
        trainingA3.push({stimulusLeft: trainStimA[1], stimulusRight: trainStimA[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimA[1].slice(7), stim_right: trainStimA[0].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[1], stimulusRight: trainStimB[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimB[1].slice(7), stim_right: trainStimB[0].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'cd') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_cd[j], validity_cd[j])
      if (leftright_train_cd[j] == 'left') { // good stim on left
        trainingA3.push({stimulusLeft: trainStimA[2], stimulusRight: trainStimA[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimA[2].slice(7), stim_right: trainStimA[3].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[2], stimulusRight: trainStimB[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimB[2].slice(7), stim_right: trainStimB[3].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      } else if (leftright_train_cd[j] == 'right') {
        trainingA3.push({stimulusLeft: trainStimA[3], stimulusRight: trainStimA[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimA[3].slice(7), stim_right: trainStimA[2].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[3], stimulusRight: trainStimB[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimB[3].slice(7), stim_right: trainStimB[2].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'ef') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ef[j], validity_ef[j])
      if (leftright_train_ef[j] == 'left') { // good stim on left
        trainingA3.push({stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimA[4].slice(7), stim_right: trainStimA[5].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[4], stimulusRight: trainStimB[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimB[4].slice(7), stim_right: trainStimB[5].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      } else if (leftright_train_ef[j] == 'right') {
        trainingA3.push({stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimA[5].slice(7), stim_right: trainStimA[4].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[5], stimulusRight: trainStimB[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimB[5].slice(7), stim_right: trainStimB[4].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'gh') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_gh[j], validity_gh[j])
      if (leftright_train_gh[j] == 'left') { // good stim on left
        trainingA3.push({stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[6], stimulusRight: trainStimB[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      } else if (leftright_train_gh[j] == 'right') {
        trainingA3.push({stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB3.push({stimulusLeft: trainStimB[7], stimulusRight: trainStimB[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      }
    }
  };

  training_pairs_shuffle = jsPsych.randomization.repeat(training_pairs, 1);

  for (let i=0; i<training_pairs_shuffle.length; i++) {
    if (training_pairs_shuffle[i] == 'ab') { // ab pair
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ab[j], validity_ab[j])
      if (leftright_train_ab[j] == 'left') { // good stim on left
        trainingA4.push({stimulusLeft: trainStimA[0], stimulusRight: trainStimA[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimA[0].slice(7), stim_right: trainStimA[1].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[0], stimulusRight: trainStimB[1], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: leftASCII, stim_left: trainStimB[0].slice(7), stim_right: trainStimB[1].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      } else if (leftright_train_ab[j] == 'right') {
        trainingA4.push({stimulusLeft: trainStimA[1], stimulusRight: trainStimA[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimA[1].slice(7), stim_right: trainStimA[0].slice(7), stim_best_choice: trainStimA[0].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[1], stimulusRight: trainStimB[0], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[0], pair_validity: training_validity[0], trial_validity: validity_ab[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[0], reward_type: training_trial_type[0], correct_response: rightASCII, stim_left: trainStimB[1].slice(7), stim_right: trainStimB[0].slice(7), stim_best_choice: trainStimB[0].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'cd') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_cd[j], validity_cd[j])
      if (leftright_train_cd[j] == 'left') { // good stim on left
        trainingA4.push({stimulusLeft: trainStimA[2], stimulusRight: trainStimA[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimA[2].slice(7), stim_right: trainStimA[3].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[2], stimulusRight: trainStimB[3], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: leftASCII, stim_left: trainStimB[2].slice(7), stim_right: trainStimB[3].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      } else if (leftright_train_cd[j] == 'right') {
        trainingA4.push({stimulusLeft: trainStimA[3], stimulusRight: trainStimA[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimA[3].slice(7), stim_right: trainStimA[2].slice(7), stim_best_choice: trainStimA[2].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[3], stimulusRight: trainStimB[2], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[1], pair_validity: training_validity[1], trial_validity: validity_cd[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[1], reward_type: training_trial_type[1], correct_response: rightASCII, stim_left: trainStimB[3].slice(7), stim_right: trainStimB[2].slice(7), stim_best_choice: trainStimB[2].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'ef') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_ef[j], validity_ef[j])
      if (leftright_train_ef[j] == 'left') { // good stim on left
        trainingA4.push({stimulusLeft: trainStimA[4], stimulusRight: trainStimA[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimA[4].slice(7), stim_right: trainStimA[5].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[4], stimulusRight: trainStimB[5], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: leftASCII, stim_left: trainStimB[4].slice(7), stim_right: trainStimB[5].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      } else if (leftright_train_ef[j] == 'right') {
        trainingA4.push({stimulusLeft: trainStimA[5], stimulusRight: trainStimA[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimA[5].slice(7), stim_right: trainStimA[4].slice(7), stim_best_choice: trainStimA[4].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[5], stimulusRight: trainStimB[4], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[2], pair_validity: training_validity[2], trial_validity: validity_ef[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[2], reward_type: training_trial_type[2], correct_response: rightASCII, stim_left: trainStimB[5].slice(7), stim_right: trainStimB[4].slice(7), stim_best_choice: trainStimB[4].slice(7)}});
      }
    } else if (training_pairs_shuffle[i] == 'gh') {
//      console.log(j, i, training_pairs_shuffle[i], leftright_train_gh[j], validity_gh[j])
      if (leftright_train_gh[j] == 'left') { // good stim on left
        trainingA4.push({stimulusLeft: trainStimA[6], stimulusRight: trainStimA[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[6], stimulusRight: trainStimB[7], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: leftASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      } else if (leftright_train_gh[j] == 'right') {
        trainingA4.push({stimulusLeft: trainStimA[7], stimulusRight: trainStimA[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimA[6].slice(7), stim_right: trainStimA[7].slice(7), stim_best_choice: trainStimA[6].slice(7)}});
        trainingB4.push({stimulusLeft: trainStimB[7], stimulusRight: trainStimB[6], chooseLeft: choice, chooseRight: choice, fixation: fixationDot, trialFeedback: feedbackContainer, data: {test_part: 'training', pair: training_pairs[3], pair_validity: training_validity[3], trial_validity: validity_gh[j], pair_trials_per_block: training_pairsPerBlock, pair_best_choice: training_good_stim[3], reward_type: training_trial_type[3], correct_response: rightASCII, stim_left: trainStimB[7].slice(7), stim_right: trainStimB[6].slice(7), stim_best_choice: trainStimB[6].slice(7)}});
      }
    }
  };
};
 

  /////////////////////
 // * TEST CONFIG * //
/////////////////////

let test_pairs =          ["ab" ,"ae" ,"af" ,"ag" ,"ah" ,"be" ,"bg" ,"cd" ,"ce" ,"cf" ,"cg" ,"ch" ,"de" ,"dg" ,"ef" ,"gh"];
let test_good_stim =      ["a"  ,"a"  ,"a"  ,"a"  ,"a"  ,"e"  ,"g"  ,"c"  ,"c"  ,"c"  ,"c"  ,"c"  ,"e"  ,"g"  ,"e"  ,"g"];

// paths are identicalpassed by reference to avoid naming confusion
let testStimA = trainStimA;
let testStimB = trainStimB;

/* version A stimuli objects */

let testA = [
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[0], pair_best_choice: test_good_stim[0], correct_response: leftASCII, stim_left: testStimA[0].slice(7), stim_right: testStimA[1].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[1],   stimulusRight: testStimA[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[0], pair_best_choice: test_good_stim[0], correct_response: rightASCII, stim_left: testStimA[1].slice(7), stim_right: testStimA[0].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[1], pair_best_choice: test_good_stim[1], correct_response: leftASCII, stim_left: testStimA[0].slice(7), stim_right: testStimA[4].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[1], pair_best_choice: test_good_stim[1], correct_response: rightASCII, stim_left: testStimA[4].slice(7), stim_right: testStimA[0].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[2], pair_best_choice: test_good_stim[2], correct_response: leftASCII, stim_left: testStimA[0].slice(7), stim_right: testStimA[5].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[5],   stimulusRight: testStimA[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[2], pair_best_choice: test_good_stim[2], correct_response: rightASCII, stim_left: testStimA[5].slice(7), stim_right: testStimA[0].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[3], pair_best_choice: test_good_stim[3], correct_response: leftASCII, stim_left: testStimA[0].slice(7), stim_right: testStimA[6].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[3], pair_best_choice: test_good_stim[3], correct_response: rightASCII, stim_left: testStimA[6].slice(7), stim_right: testStimA[0].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[0],   stimulusRight: testStimA[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[4], pair_best_choice: test_good_stim[4], correct_response: leftASCII, stim_left: testStimA[0].slice(7), stim_right: testStimA[7].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[7],   stimulusRight: testStimA[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[4], pair_best_choice: test_good_stim[4], correct_response: rightASCII, stim_left: testStimA[7].slice(7), stim_right: testStimA[0].slice(7), stim_best_choice: testStimA[0].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[1],   stimulusRight: testStimA[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[5], pair_best_choice: test_good_stim[5], correct_response: leftASCII, stim_left: testStimA[1].slice(7), stim_right: testStimA[4].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[5], pair_best_choice: test_good_stim[5], correct_response: rightASCII, stim_left: testStimA[4].slice(7), stim_right: testStimA[1].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[1],   stimulusRight: testStimA[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[6], pair_best_choice: test_good_stim[6], correct_response: leftASCII, stim_left: testStimA[1].slice(7), stim_right: testStimA[6].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[6], pair_best_choice: test_good_stim[6], correct_response: rightASCII, stim_left: testStimA[6].slice(7), stim_right: testStimA[1].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[7], pair_best_choice: test_good_stim[7], correct_response: leftASCII, stim_left: testStimA[2].slice(7), stim_right: testStimA[3].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[3],   stimulusRight: testStimA[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[7], pair_best_choice: test_good_stim[7], correct_response: rightASCII, stim_left: testStimA[3].slice(7), stim_right: testStimA[2].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[8], pair_best_choice: test_good_stim[8], correct_response: leftASCII, stim_left: testStimA[2].slice(7), stim_right: testStimA[4].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[8], pair_best_choice: test_good_stim[8], correct_response: rightASCII, stim_left: testStimA[4].slice(7), stim_right: testStimA[2].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[9], pair_best_choice: test_good_stim[9], correct_response: leftASCII, stim_left: testStimA[2].slice(7), stim_right: testStimA[5].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[5],   stimulusRight: testStimA[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[9], pair_best_choice: test_good_stim[9], correct_response: rightASCII, stim_left: testStimA[5].slice(7), stim_right: testStimA[2].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[10], pair_best_choice: test_good_stim[10], correct_response: leftASCII, stim_left: testStimA[2].slice(7), stim_right: testStimA[6].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[10], pair_best_choice: test_good_stim[10], correct_response: rightASCII, stim_left: testStimA[6].slice(7), stim_right: testStimA[2].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[2],   stimulusRight: testStimA[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[11], pair_best_choice: test_good_stim[11], correct_response: leftASCII, stim_left: testStimA[2].slice(7), stim_right: testStimA[7].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[7],   stimulusRight: testStimA[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[11], pair_best_choice: test_good_stim[11], correct_response: rightASCII, stim_left: testStimA[7].slice(7), stim_right: testStimA[2].slice(7), stim_best_choice: testStimA[2].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[3],   stimulusRight: testStimA[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[12], pair_best_choice: test_good_stim[12], correct_response: leftASCII, stim_left: testStimA[3].slice(7), stim_right: testStimA[4].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[12], pair_best_choice: test_good_stim[12], correct_response: rightASCII, stim_left: testStimA[4].slice(7), stim_right: testStimA[3].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[3],   stimulusRight: testStimA[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[13], pair_best_choice: test_good_stim[13], correct_response: leftASCII, stim_left: testStimA[3].slice(7), stim_right: testStimA[6].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[13], pair_best_choice: test_good_stim[13], correct_response: rightASCII, stim_left: testStimA[6].slice(7), stim_right: testStimA[3].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[4],   stimulusRight: testStimA[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[14], pair_best_choice: test_good_stim[14], correct_response: leftASCII, stim_left: testStimA[4].slice(7), stim_right: testStimA[5].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[5],   stimulusRight: testStimA[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[14], pair_best_choice: test_good_stim[14], correct_response: rightASCII, stim_left: testStimA[5].slice(7), stim_right: testStimA[4].slice(7), stim_best_choice: testStimA[4].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[6],   stimulusRight: testStimA[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[15], pair_best_choice: test_good_stim[15], correct_response: leftASCII, stim_left: testStimA[6].slice(7), stim_right: testStimA[7].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
  {stimulusLeft: testStimA[7],   stimulusRight: testStimA[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'transfer', pair: test_pairs[15], pair_best_choice: test_good_stim[15], correct_response: rightASCII, stim_left: testStimA[7].slice(7), stim_right: testStimA[6].slice(7), stim_best_choice: testStimA[6].slice(7)}}, // 0 key
]

/* version B stimuli objects */

let testB = [
    {stimulusLeft: testStimB[0],   stimulusRight: testStimB[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], pair_best_choice: test_good_stim[0], correct_response: leftASCII, stim_left: testStimB[0].slice(7), stim_right: testStimB[1].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[1],   stimulusRight: testStimB[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[0], pair_best_choice: test_good_stim[0], correct_response: rightASCII, stim_left: testStimB[1].slice(7), stim_right: testStimB[0].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[0],   stimulusRight: testStimB[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], pair_best_choice: test_good_stim[1], correct_response: leftASCII, stim_left: testStimB[0].slice(7), stim_right: testStimB[4].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[4],   stimulusRight: testStimB[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[1], pair_best_choice: test_good_stim[1], correct_response: rightASCII, stim_left: testStimB[4].slice(7), stim_right: testStimB[0].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[0],   stimulusRight: testStimB[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], pair_best_choice: test_good_stim[2], correct_response: leftASCII, stim_left: testStimB[0].slice(7), stim_right: testStimB[5].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[5],   stimulusRight: testStimB[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[2], pair_best_choice: test_good_stim[2], correct_response: rightASCII, stim_left: testStimB[5].slice(7), stim_right: testStimB[0].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[0],   stimulusRight: testStimB[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], pair_best_choice: test_good_stim[3], correct_response: leftASCII, stim_left: testStimB[0].slice(7), stim_right: testStimB[6].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[6],   stimulusRight: testStimB[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[3], pair_best_choice: test_good_stim[3], correct_response: rightASCII, stim_left: testStimB[6].slice(7), stim_right: testStimB[0].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[0],   stimulusRight: testStimB[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], pair_best_choice: test_good_stim[4], correct_response: leftASCII, stim_left: testStimB[0].slice(7), stim_right: testStimB[7].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[7],   stimulusRight: testStimB[0],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[4], pair_best_choice: test_good_stim[4], correct_response: rightASCII, stim_left: testStimB[7].slice(7), stim_right: testStimB[0].slice(7), stim_best_choice: testStimB[0].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[1],   stimulusRight: testStimB[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], pair_best_choice: test_good_stim[5], correct_response: leftASCII, stim_left: testStimB[1].slice(7), stim_right: testStimB[4].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[4],   stimulusRight: testStimB[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[5], pair_best_choice: test_good_stim[5], correct_response: rightASCII, stim_left: testStimB[4].slice(7), stim_right: testStimB[1].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[1],   stimulusRight: testStimB[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], pair_best_choice: test_good_stim[6], correct_response: leftASCII, stim_left: testStimB[1].slice(7), stim_right: testStimB[6].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[6],   stimulusRight: testStimB[1],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[6], pair_best_choice: test_good_stim[6], correct_response: rightASCII, stim_left: testStimB[6].slice(7), stim_right: testStimB[1].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[2],   stimulusRight: testStimB[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], pair_best_choice: test_good_stim[7], correct_response: leftASCII, stim_left: testStimB[2].slice(7), stim_right: testStimB[3].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[3],   stimulusRight: testStimB[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[7], pair_best_choice: test_good_stim[7], correct_response: rightASCII, stim_left: testStimB[3].slice(7), stim_right: testStimB[2].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[2],   stimulusRight: testStimB[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[8], pair_best_choice: test_good_stim[8], correct_response: leftASCII, stim_left: testStimB[2].slice(7), stim_right: testStimB[4].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[4],   stimulusRight: testStimB[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[8], pair_best_choice: test_good_stim[8], correct_response: rightASCII, stim_left: testStimB[4].slice(7), stim_right: testStimB[2].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[2],   stimulusRight: testStimB[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[9], pair_best_choice: test_good_stim[9], correct_response: leftASCII, stim_left: testStimB[2].slice(7), stim_right: testStimB[5].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[5],   stimulusRight: testStimB[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[9], pair_best_choice: test_good_stim[9], correct_response: rightASCII, stim_left: testStimB[5].slice(7), stim_right: testStimB[2].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[2],   stimulusRight: testStimB[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[10], pair_best_choice: test_good_stim[10], correct_response: leftASCII, stim_left: testStimB[2].slice(7), stim_right: testStimB[6].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[6],   stimulusRight: testStimB[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[10], pair_best_choice: test_good_stim[10], correct_response: rightASCII, stim_left: testStimB[6].slice(7), stim_right: testStimB[2].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[2],   stimulusRight: testStimB[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[11], pair_best_choice: test_good_stim[11], correct_response: leftASCII, stim_left: testStimB[2].slice(7), stim_right: testStimB[7].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[7],   stimulusRight: testStimB[2],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[11], pair_best_choice: test_good_stim[11], correct_response: rightASCII, stim_left: testStimB[7].slice(7), stim_right: testStimB[2].slice(7), stim_best_choice: testStimB[2].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[3],   stimulusRight: testStimB[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[12], pair_best_choice: test_good_stim[12], correct_response: leftASCII, stim_left: testStimB[3].slice(7), stim_right: testStimB[4].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[4],   stimulusRight: testStimB[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[12], pair_best_choice: test_good_stim[12], correct_response: rightASCII, stim_left: testStimB[4].slice(7), stim_right: testStimB[3].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[3],   stimulusRight: testStimB[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[13], pair_best_choice: test_good_stim[13], correct_response: leftASCII, stim_left: testStimB[3].slice(7), stim_right: testStimB[6].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[6],   stimulusRight: testStimB[3],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[13], pair_best_choice: test_good_stim[13], correct_response: rightASCII, stim_left: testStimB[6].slice(7), stim_right: testStimB[3].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[4],   stimulusRight: testStimB[5],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[14], pair_best_choice: test_good_stim[14], correct_response: leftASCII, stim_left: testStimB[4].slice(7), stim_right: testStimB[5].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[5],   stimulusRight: testStimB[4],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[14], pair_best_choice: test_good_stim[14], correct_response: rightASCII, stim_left: testStimB[5].slice(7), stim_right: testStimB[4].slice(7), stim_best_choice: testStimB[4].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[6],   stimulusRight: testStimB[7],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[15], pair_best_choice: test_good_stim[15], correct_response: leftASCII, stim_left: testStimB[6].slice(7), stim_right: testStimB[7].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
    {stimulusLeft: testStimB[7],   stimulusRight: testStimB[6],  chooseLeft: choice, chooseRight: choice, fixation: fixationDot, data: {test_part: 'test', pair: test_pairs[15], pair_best_choice: test_good_stim[15], correct_response: rightASCII, stim_left: testStimB[7].slice(7), stim_right: testStimB[6].slice(7), stim_best_choice: testStimB[6].slice(7)}}, // 0 key
  ]
