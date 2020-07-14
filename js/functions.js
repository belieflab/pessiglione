// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
//       // swap elements array[i] and array[j]
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

// function version(stim_set) {
//     if(stim_set == 'A') {
//         let practice_files = ["stim/field4.bmp","stim/field10.bmp","stim/field13.bmp","stim/field17.bmp"];
// //        let training_files = ["stim/Field3.bmp","stim/Field5.bmp","stim/Field14.bmp","stim/Field11.bmp","stim/Field9.bmp","stim/Field12.bmp","stim/Field15.bmp","stim/Field16.bmp"];
//         } else {
//             let practice_files = ["stim/African_landscape.jpg","stim/closeWater_pines_mountains.jpg","stim/Trees_with_flowers.jpg","stim/wheat_with_farmhouse.jpg"];
// //            let training_files = ["stim/3d-landscape-background-10.jpg","stim/2822landscape.jpg","stim/lsingeltree_tallergrass_clouds.jpg","stim/orangey_field.jpg","stim/water_fall_images.jpg","stim/water_pines_distantMountains.jpg","stim/water_pines_snowy_moutain.jpg","stim/waterfall_waterBelow.jpg"];
//         }
// //        shuffle(training_files);
//     }

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