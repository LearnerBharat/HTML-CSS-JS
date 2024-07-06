// Select all buttons with the class 'ripple'
const buttons = document.querySelectorAll(".ripple");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Get the X and Y coordinates of the click event
    const x = event.clientX;
    const y = event.clientY;

    // Get the button's position relative to the viewport
    const buttonLeft = event.target.offsetLeft;
    const buttonTop = event.target.offsetTop;

    // Calculate the position inside the button where the click occurred
    const insideX = x - buttonLeft;
    const insideY = y - buttonTop;

    // Create a new span element to act as the ripple circle
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = insideY + "px";
    circle.style.left = insideX + "px";

    // Append the circle to the button
    this.appendChild(circle);

    // Remove the circle after the animation ends
    setTimeout(() => circle.remove(), 500);
  });
});
