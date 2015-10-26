var messages = [
  "You are loved",
  "You can do it, I promise",
  "Breathe",
  "You are strong",
  "You are one of a kind",
  "You are worthy",
  "You matter, even in the grand scheme",
  "FUCK IT",
  "You are not alone",
  "It's okay to cry",
  "Life really will make sense again",
  "You are going to be okay",
  "Fuck them, they don't matter",
  "You are unique",
  "Love your body",
  "You are allowed to be scared",
  "Close your eyes and jump",
  "You deserve happiness, even if you don't feel like it"
];
function getMessage(){
  var n = Math.random()*18;
  n = Math.floor(n);
  var m = messages[n];
  document.getElementById("test").innerHTML = m;
}
