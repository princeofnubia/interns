<<<<<<< HEAD
const result = document.querySelector(".result");
const display = document.getElementById("input1");
const display1 = document.querySelector(".input2");
=======
const display = document.getElementById("input1");
const result = document.getElementById("input2");
>>>>>>> d95a207877fe248bd4da6431babf7289a0380bad
const buttons1 = document.querySelectorAll(".buttons1");
const buttons2 = document.querySelectorAll(".buttons2");

//addEventListener("click", show());
buttons1.forEach((value) => {
  value.addEventListener("click", show);
});
function show(e) {
  e.preventDefault();
<<<<<<< HEAD
  console.log(e.target.innerText);
  let buttonText = e.target.innerText;
  if (buttonText == "AC") {
    display.innerText = "";
    display1.innerText = "";
    result.innerText = "0";
  } 
  if(buttonText == "DEL"){
    display.textContent= display.textContent.substring(0, display.textContent.length - 1)
  }
  else {
    display.innerText += buttonText;
    display1.innerText += buttonText;
  }
=======
  let buttonText = e.target.innerText;
  if (buttonText == "AC") {
    display.innerText = "";
    result.innerText = "0";
    return;
  }
  if (buttonText === "DEL") {
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1
    );
    return;
  }
  if (buttonText === "=") {
    console.log(9);
    result.innerText = calculate(display.innerText);
    return;
  } else {
    display.innerText += buttonText;
  }
}

document.oncut((event) => {
  alert(99);
});

function calculate(str) {
  return 1;
>>>>>>> d95a207877fe248bd4da6431babf7289a0380bad
}
