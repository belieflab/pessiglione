
/* TurkPrime MTurk API */
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
    preload_images: [pracStimA, pracStimB, trainStimA, trainStimB, testStimA, testStimB, choiceA, choiceB, feedbackOptions],
    on_finish: function(){ saveData("pessiglione" + workerID, jsPsych.data.get().csv()); }
    //on_finish: function(){
      //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
        //jsPsych.data.displayData(); 
    //}
  });
}

/* insert instructions122 */
function pushInstructions() {
for (let i = 0; i < instructionsText.length; i++) {
    instructions.push({
      type: "html-keyboard-response",
      stimulus: instructionsText[i],
      choices: [32]
    });
    timeline.push(instructions[i]);
    }
}

/* write to data/.csv */
function saveData(name, data){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php'); // 'index.php' contains the php script described above
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
  }

function versionSelect() {
    if (version == 'A') {
        practiceStimVersion = practiceA;
        trainingStimVersion = trainingA;
    } else if (version =='B') {
        practiceStimVersion = practiceB;
        trainingStimVersion = trainingB;
    } else {
        prompt("enter 'A' or 'B'");
    }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
    return array;
  }
}

function determineTrialValidity(pairName, pairValidity, pairPresentationNumber, totalPairPresentationsPerTrialBlock) {
  switch (pairName) {
    case 'ab':
      if (pairPresentationNumber === 0) { //first trial for this particular pair
        let validityArray_ab = [];
        for (i=0; i<pairValidity*totalPairPresentationsPerTrialBlock; i++) {
          validityArray_ab.push('valid');
        };
        if (validityArray_ab.length < totalPairPresentationsPerTrialBlock) {
          for (i=pairValidity*totalPairPresentationsPerTrialBlock; i<totalPairPresentationsPerTrialBlock; i++) {
            validityArray_ab.push('invalid');
          };
        };
      };
      if (pairPresentationNumber % totalPairPresentationsPerTrialBlock === 0) { //shuffle validity array to start each new block of trials
        shuffle(validityArray_ab);
      };
      return validityArray_ab[0];

    case 'cd':
      if (pairPresentationNumber === 0) { //first trial for this particular pair
        let validityArray_cd = [];
        for (i=0; i<pairValidity*totalPairPresentationsPerTrialBlock; i++) {
          validityArray_cd.push('valid');
        };
        if (validityArray_cd.length < totalPairPresentationsPerTrialBlock) {
          for (i=pairValidity*totalPairPresentationsPerTrialBlock; i<totalPairPresentationsPerTrialBlock; i++) {
            validityArray_cd.push('invalid');
          };
        };
      };
      if (pairPresentationNumber % totalPairPresentationsPerTrialBlock === 0) { //shuffle validity array to start each new block of trials
        shuffle(validityArray_cd);
      };
      return validityArray_cd[0];

    case 'ef':
      if (pairPresentationNumber === 0) { //first trial for this particular pair
        let validityArray_ef = [];
        for (i=0; i<pairValidity*totalPairPresentationsPerTrialBlock; i++) {
          validityArray_ef.push('valid');
        };
        if (validityArray_ef.length < totalPairPresentationsPerTrialBlock) {
          for (i=pairValidity*totalPairPresentationsPerTrialBlock; i<totalPairPresentationsPerTrialBlock; i++) {
            validityArray_ef.push('invalid');
          };
        };
      };
      if (pairPresentationNumber % totalPairPresentationsPerTrialBlock === 0) { //shuffle validity array to start each new block of trials
        shuffle(validityArray_ef);
      };
      return validityArray_ef[0];

    case 'gh':
      if (pairPresentationNumber === 0) { //first trial for this particular pair
        let validityArray_gh = [];
        for (i=0; i<pairValidity*totalPairPresentationsPerTrialBlock; i++) {
          validityArray_gh.push('valid');
        };
        if (validityArray_gh.length < totalPairPresentationsPerTrialBlock) {
          for (i=pairValidity*totalPairPresentationsPerTrialBlock; i<totalPairPresentationsPerTrialBlock; i++) {
            validityArray_gh.push('invalid');
          };
        };
      };
      if (pairPresentationNumber % totalPairPresentationsPerTrialBlock === 0) { //shuffle validity array to start each new block of trials
        shuffle(validityArray_gh);
      };
      return validityArray_gh[0];

    default:
      
  };
}
