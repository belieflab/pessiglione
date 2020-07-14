
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
    preload_images: [stimA, stimB, feedbackA, feedbackB],
    on_finish: function(){ saveData("pessiglione" + workerID, jsPsych.data.get().csv()); }
    //on_finish: function(){
      //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
        //jsPsych.data.displayData(); 
    //}
  });
}

/* insert instructions into timeline */
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

// function selectStim(version) {
//     if (version == 'A') {
//         masterStim = masterStim[0]
//     } else if (version =='B') {
//         masterStim = stimA,
//     } else {
//         prompt("enter 'A' or 'B'")
//     }
// }

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
//       // swap elements array[i] and array[j]
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
