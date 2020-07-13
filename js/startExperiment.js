/* start the experiment */
function startExperiment(){
    jsPsych.init({
      timeline: timeline,
      show_progress_bar: true,
      on_finish: function(){ saveData("delay-discounting" + workerID, jsPsych.data.get().csv()); }
      //on_finish: function(){
        //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
          //jsPsych.data.displayData(); 
      //}
    });
  }