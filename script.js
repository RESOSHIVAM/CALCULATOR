let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

// Function to update the input field
function updateInput(value) {
  string += value;
  input.value = string;
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
  const key = event.key;

  // Check if the pressed key is a digit, an operator, Enter, or Backspace
  if (/^\d$/.test(key) || "+-*/".includes(key)) {
    updateInput(key);
  } else if (key === "Enter") {
    try {
      string = eval(string);
      input.value = string;
    } catch (error) {
      // Handle invalid input or errors
      input.value = "Error";
    }
  } else if (key === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  }
}

// Add click event listeners to the buttons
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        // Handle invalid input or errors
        input.value = "Error";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      updateInput(e.target.innerHTML);
    }
  });
});

// Add a keyboard event listener to the document
document.addEventListener("keydown", handleKeyboardInput);
