const NUMMINUTS = 60;

function convertTimeToMinuts(time) {

  const t = time.split(':');

  const hour = t[0];
  const minuts = t[1];

  return hour * NUMMINUTS + parseInt(minuts, 10);
}

function checkMeeting(workStart, workEnd, meetingStart, meeyingDuration) {
  const wStart = convertTimeToMinuts(workStart);
  const wEnd = convertTimeToMinuts(workEnd);
  const meeting = convertTimeToMinuts(meetingStart) + meeyingDuration;

  if (meeting >= wStart && meeting <= wEnd) {

    // console.log('wStart = ' + wStart);
    // console.log('wEndK =' + wEnd);
    // console.log('meeting =' + meeting);
    // console.log('OK');
    return true;
  }
  //  console.log('wStart = ' + wStart);
  //   console.log('wEndK =' + wEnd);
  //   console.log('meeting =' + meeting);
  //  console.log(':((');
  return false;
}

checkMeeting('08:00', '17:30', '14:00', 90);
checkMeeting('8:0', '10:0', '8:0', 120);
checkMeeting('08:00', '14:30', '14:00', 90);
checkMeeting('14:00', '17:30', '08:0', 90);
checkMeeting('8:00', '17:30', '08:00', 900);

// console.log(checkMeeting('08:00', '17:30', '14:00', 90)); // true
// console.log(checkMeeting('8:0', '10:0', '8:0', 120));     // true
// console.log(checkMeeting('08:00', '14:30', '14:00', 90)); // false
// console.log(checkMeeting('14:00', '17:30', '08:0', 90));  // false
// console.log(checkMeeting('8:00', '17:30', '08:00', 900)); // false
