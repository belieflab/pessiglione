  
  //******************************************/
 //   PESSIGLIONNE                           /
//******************************************/

/* enable subjectID prompt */
let workerID = prompt("Enter your subject id" );

/* set task version */
const version = 'A';
// const version = 'B';


/* Adjust Response Keys */
let leftASCII= 49;
let rightASCII = 50;

let leftKey = '1';
let rightKey = '2';

// define inter-stimulus interval
let isi = [1000, 5000];

/* feed instructions into timeline */
let instructionsText = [

    '<h3 style="color:#0ed145;">Welcome to the experiment!</h3>'+
        '<p>Press the spacebar continue.</p>',

    '<p>In this task you will see two pictures side-by-side on the computer screen.</p>'+
        '<p>In each pair of pictures you see on the screen, one picture will be better than the other.</p>'+
        '<p>You need to figure out which picture in each pair is the better one.</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>The better picture in each pair will be more likely to either</p>'+
        '<p>A) win you some money,</p>'+
        '<p>or</p>'+
        '<p>B) allow you to keep the money you\'ve already earned.</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>On those trials where you can A) win money, you will want to select the picture most likely to earn a nickel:</p>'+
        '<img style="height:100px; width:100px" src="stim/win.bmp"></img>'+
        '<p>Because if you keep seeing this feedback:</p>'+
        '<h3 style="color:red;">Not a winner. Try again. =[</h3>'+
        '<p>you probably aren\'t selecting the best picture...</p>'+
        '<p>Press the spacebar continue.</p>',

    '<p>On those trials where you can B) lose money, you will want to select the picture most likely to give this feedback:</p>'+
        '<h3 style="color:blue;">Keep your money.</h3>'+
        '<p>Because if you keep seeing this:</p>'+
        '<img style="height:100px; width:100px" src="stim/lose.bmp"></img>'+
        '<p>you probably aren\'t selecting the best picture...</p>',

    '<p>Press the '+leftKey+' key on your keyboard to select the picture on the LEFT.</p>'+
        '<p>Press the '+rightKey+' key on your keyboard to select the picture on the RIGHT.</p>'+
        '<p>Press the spacebar continue.</p>'
];

// Qualtrics survery link 
let link;
//link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId=";
