
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
<<<<<<< HEAD
    preload_images: [pracStimA, pracStimB, trainStimA, trainStimB, testStimA, testStimB, choice, feedbackOptions],
    on_finish: function(){ saveData("pessiglione_" + workerId, jsPsych.data.get().csv()); }
=======
    preload_images: [pracStimA, pracStimB, trainStimA, trainStimB, testStimA, testStimB, choice, feedbackOptionsMoney, feedbackOptionsPoints],
    on_finish: function(){ saveData("pessiglione" + workerId, jsPsych.data.get().csv()); }
>>>>>>> 296df0988271904ffd97d8685393043f364e88d5
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
        trainingStimBlock1 = trainingA1;
        trainingStimBlock2 = trainingA2;
        trainingStimBlock3 = trainingA3;
        trainingStimBlock4 = trainingA4;
        testStimVersion = testA;
    } else if (version =='B') {
        practiceStimVersion = practiceB;
        trainingStimBlock1 = trainingB1;
        trainingStimBlock2 = trainingB2;
        trainingStimBlock3 = trainingB3;
        trainingStimBlock4 = trainingB4;
        testStimVersion = testB;
    } else {
        prompt("enter 'A' or 'B'");
    }
}