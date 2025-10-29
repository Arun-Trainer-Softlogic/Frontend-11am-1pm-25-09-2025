let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";

  for (let j = 1; j <= rows + i - 1; j++) {
    if (j <= rows - i) {
      str += " "; // spaces before stars
    } else {
      str += "*"; // stars
    }
  }

  console.log(str);
}
