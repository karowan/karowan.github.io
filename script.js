(() => {
  const DOMstrings = {
    upArrow: "up-arrow",
    downArrow: "down-arrow",
    leftArrow: "left-arrow",
    rightArrow: "right-arrow",
    select: "select",
    start: "start"
  };
  let count = 0;
  document
    .getElementById(DOMstrings.upArrow)
    .addEventListener("click", function() {
      count === 0 || count === 1 ? count++ : (count = 0);
      console.log(count);
    });

  document
    .getElementById(DOMstrings.downArrow)
    .addEventListener("click", function() {
      count === 2 || count === 3 ? count++ : (count = 0);
      console.log(count);
    });

  document
    .getElementById(DOMstrings.leftArrow)
    .addEventListener("click", function() {
      count === 4 || count === 6 ? count++ : (count = 0);
      console.log(count);
    });

  document
    .getElementById(DOMstrings.rightArrow)
    .addEventListener("click", function() {
      count === 5 || count === 7 ? count++ : (count = 0);
      console.log(count);
    });
  document
    .getElementById(DOMstrings.select)
    .addEventListener("click", function() {
      count = 0;
    });
})();
