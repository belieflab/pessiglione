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
    <script type="text/javascript" src="conf.js"></script>
    <script type="text/javascript" src="jsPsych/jspsych.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body  style="background-color: white;">  
    <?php include "include/consent.php"?>
  </body>
  <footer>
    <script type="text/javascript" src="js/consent.js"></script>
    <script type="text/javascript" src="js/fn.js"></script>
    <script type="text/javascript" src="js/var.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
  </footer>
</html>
