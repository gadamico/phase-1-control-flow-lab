function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return 'This one is on me!'
  } else if (distance <= 2000) {
    return 'That will be twenty bucks.'
  } else if (distance <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else {return 'No can do.'}

}

function ternaryCheckCity(city){
  // Write your code here!
  let out;
  city === 'NYC' ? (out = 'Ok, sounds good.') : (out = 'No go.')
  return out;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let out;
  switch (tip) {
    case 'generous': out = 'Thank you so much.';
    break;
    case 'not as generous': out = 'Thank you.';
    break;
    default : out = 'Bye.'
  }
  return out;
}