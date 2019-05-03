const DOMstrings = {
  upArrow: "up-arrow",
  downArrow: "down-arrow",
  leftArrow: "left-arrow",
  rightArrow: "right-arrow"
};

(() => {
  let count = 0;
  document
    .getElementById(DOMstrings.upArrow)
    .addEventListener("click", function() {
      if (count === 0 || count === 1) {
        count++;
      } else {
        count = 0;
      }
      console.log(count);
    });

  document
    .getElementById(DOMstrings.downArrow)
    .addEventListener("click", function() {
      if (count === 2 || count === 3) {
        count++;
      } else {
        count = 0;
      }
      console.log(count);
    });

  document
    .getElementById(DOMstrings.leftArrow)
    .addEventListener("click", function() {
      if (count === 4 || count === 6) {
        count++;
      } else {
        count = 0;
      }
      console.log(count);
    });

  document
    .getElementById(DOMstrings.rightArrow)
    .addEventListener("click", function() {
      if (count === 5 || count === 7) {
        count++;
      } else {
        count = 0;
      }
      console.log(count);
    });
})();
