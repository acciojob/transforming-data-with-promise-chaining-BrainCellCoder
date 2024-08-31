//your JS code here. If required.
// Function to create a promise that resolves after a specified time with a number
function resolveAfterSeconds(number, seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, seconds * 1000);
  });
}

// Function to start the promise chain when the button is clicked
document.getElementById("btn").addEventListener("click", () => {
  const inputNumber = Number(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  // Initial promise to resolve with the input number after 2 seconds
  resolveAfterSeconds(inputNumber, 2)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return resolveAfterSeconds(result * 2, 1); // Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return resolveAfterSeconds(result - 3, 1); // Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return resolveAfterSeconds(result / 2, 1); // Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return resolveAfterSeconds(result + 10, 1); // Add 10
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});
