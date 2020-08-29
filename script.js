let blackKeys = new Set (['W', 'E', 'T', 'Y', 'U']);
let whiteKeys = new Set (['A', 'S', 'D', 'F', 'G', 'H', 'J']);
let keys = new Set([
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "W",
  "E",
  "T",
  "Y",
  "U",
]);

document.addEventListener("keydown", function (e) {
  if (keys.has(e.key.toUpperCase())) {
    console.log("The '" + e.key.toUpperCase() + "' key is pressed");
    let audio = new Audio("./audio/" + e.key.toUpperCase() + ".mp3");
    audio.play().then(function () {
      console.log("Audio played");
    });
    console.log(e.key.toUpperCase() + "-key");
    document.getElementById(e.key.toUpperCase() + "-key").style.backgroundColor = "black";
    document.getElementById(e.key.toUpperCase() + "-key").style.color = "white";
  } else {
      console.log("Different key pressed");
  }
});
document.addEventListener("keyup", function(e) {
    if (whiteKeys.has(e.key.toUpperCase())) {
            document.getElementById(e.key.toUpperCase() + "-key").style.backgroundColor = "white";
    document.getElementById(e.key.toUpperCase() + "-key").style.color = "black";

}})
