/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hrMin = time.split(':');
  let hr = parseInt(hrMin[0]);
  let min = parseInt(hrMin[1]);
  if(hr<12){
    return "Good Morning";
  }else if(hr>12 && hr<17){
    return "Good Afternoon";
  }else{
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(content){
  document.getElementById('greeting').innerText = content.toString();
}
