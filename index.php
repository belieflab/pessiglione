<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>


<!DOCTYPE html>
<html>
  <head>
    <title>Pessiglione</title>
    <script src="js/saveData.js"></script>
    <!-- <script src="js/startExperiment.js"></script> -->
    <script src="js/functions.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body  style="background-color: white;">  
    <?php include "include/consent.php"?>
  </body>
  

<footer>

<script type="text/javascript" src="conf.js"></script>
<script type="text/javascript" src="timeline.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>

<script>
// show page when loaded 
window.onload = function() {
  $(".loading").css({display: "none"});
  $(".consent").css({display: "block"});
  $(".buttonHolder").css({display: "block"});
};
</script>
</footer>
  </html>
