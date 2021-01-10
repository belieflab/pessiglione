switch(workerId%4){
    case 0:
      version = 'A';
      reward = 'money';
      break;
    case 1:
      version = 'A';
      reward = 'points';
      break;
    case 2:
      version = 'B';
      reward = 'money';
      break;
    case 3:
      version = 'B';
      reward = 'points';
      break;
}
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