<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);

include_once ("db/config.php");

$studyId = $_GET["studyId"];
$candidateId = $_GET["candidateId"];
if (isset($candidateId)) {
  $query = "SELECT GUID from phi where sub_id = $candidateId";
  $prepare = $db_connection->prepare($query);
  $prepare->execute();
  $result = $prepare->get_result();
  $row = $result->fetch_assoc();
  $guid = $row["GUID"];
  $prepare->close();
  } else {
}
$subjectKey = $_GET["subjectkey"];
$consortId = $_GET["src_subject_id"];
$sexAtBirth = $_GET["sex"];
$institutionAlias = $_GET["site"];
$ageInMonths = $_GET["interview_age"];
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
    <?php include "include/nda.php"?>
  </body>
  <footer>
    <script type="text/javascript" src="exp/conf.js"></script>
    <script type="text/javascript" src="db/validate.js"></script>
    <script type="text/javascript" src="exp/var.js"></script>
    <script type="text/javascript" src="exp/fn.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
    <script type="text/javascript">
    let feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/pessiglione.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
    let GUID = "<?php echo $subjectKey?>";
    let subjectID = "<?php echo $consortId?>";
    let sexAtBirth = "<?php echo $sexAtBirth?>";
    let siteID = "<?php echo $institutionAlias?>";
    let ageAtAssessment = "<?php echo $ageInMonths?>";
    </script>
  </footer>
</html>
