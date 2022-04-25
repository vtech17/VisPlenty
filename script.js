// Get the modal
var modal = document.getElementById("modal-1");

// Get the button that opens the modal
var btn = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var slider = document.getElementById("myRanger");

slider.oninput = function() {
  // chrome.tabs.query({active: true, currentindow: true}, tabs=> {
  //   chrome.tabs.sendMessage(tabs[0].id,
  //     {
  //       "message": slider.value,

  //     }, function(response) {
  //       alert(response);
  //     });
  // });
  // $('p').css('font-size', slider.value + 'em')
  
  // Send request to content script: 
  var x = document.getElementById("myRanger").value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: x.toString()}, function(response) {
      console.log(response.farewell);
    });
  });

}


function sliderVal(){
  var x = document.getElementById("myRanger").value;
  var temp = document.getElementsByTagName("p");
  console.log(temp);
  // document.getElementById("demo").style.fontSize = "20px";
  // document.getElementById("demo").style.color = "green";
  document.getElementById("demo").innerHTML = x;

  for (let i = 0; i < temp.length; i++){
    temp[i].style.fontSize = x.toString().concat("px");
  } 
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('apply').addEventListener('click', sliderVal);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}