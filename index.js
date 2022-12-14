function scuberGreetingForFeet(rideLength){
  let message;
  if (rideLength > 2500) {
    message = 'No can do.';
  } else if (rideLength > 2000) {
      message = 'I will gladly take your thirty bucks.';
  } else if (rideLength > 400 ) {
    message = 'That will be twenty bucks.';
  } else if (rideLength <= 400) {
    message = 'This one is on me!';
  }
  return message;
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipAmount){
  let response;
  switch (tipAmount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}