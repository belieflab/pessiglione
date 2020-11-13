
<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
$studyId = $_GET["studyId"];
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Pessiglione</title>

    <script type="text/javascript" src="jsPsych/jspsych.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body id='unload' onbeforeunload="return areYouSure()" style="background-color: white;">  
    <?php include "include/intake.php"?>
  </body>
  <footer>
    <script type="text/javascript" src="exp/conf.js"></script>
    <script type="text/javascript" src="db/submit.js"></script>
    <script type="text/javascript" src="db/validate.js"></script>
    <script type="text/javascript" src="exp/var.js"></script>
    <script type="text/javascript" src="exp/fn.js"></script>
    <script type="text/javascript" src="exp/timeline.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
    <script type="text/javascript">
    let feedbackLink = "https://omnibus.sh/eCRFs/feedback/tasks/pessiglione.php?studyId=<?php echo $studyId?>";
    </script>
  </footer>
</html>
