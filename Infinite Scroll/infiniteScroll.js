var list = document.getElementById("main");
var a = 1;

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

var listFunc = function () {
  for (var i = 0; i < 25; i++) {
    var color = getRandomColor();
    var item = document.createElement("li");
    item.innerText = "List Item " + a++;
    item.style.color = color;
    list.appendChild(item);
  }
};

list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    listFunc();
  }
});
listFunc();
