var colors = {
  'red': [255, 0, 0],
  'blue': [0, 0, 255],
  'green': [0, 255, 0],
  'orange': [255, 128, 0],
  'yellow': [255, 255, 0],
  'violet': [127, 0, 255],
  'black': [0, 0, 0],
  'white': [255, 255, 255],
  'indigo': [75, 0, 130]
};

var current = [255, 255, 255];

function bindEvents () {
  var buttons = document.querySelectorAll(".button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
  }
}

function handleClick () {
  var clickColor = colors[this.id];
  var percentage = document.querySelector("select").value;
  percentage = percentage.slice(0, percentage.length - 1) / 100;

  clickColor.forEach(function (value, i) {
    var diff = Math.floor((value - current[i]) * percentage);
    current[i] += diff;
  });

  updateColor();
}

function updateColor () {
  var rgbString = "rgb(" + current[0] + ", " +
                            current[1] + ", " +
                            current[2] + ")";

  document.querySelector("body").style.backgroundColor = rgbString;
  document.querySelector("#current").innerHTML = rgbString;
  updateFontColor();
}

function updateFontColor () {
  var darkCount = 0;
  current.forEach(function (value) {
    if (value < 127) { darkCount ++; }
  });
  if (darkCount > 1) {
    document.querySelector("body").style.color = "white";
  } else {
    document.querySelector("body").style.color = "black";
  }
}
