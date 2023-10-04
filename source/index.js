var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");

function changeLinkColor(link) {
  var links = [a, b, c, d, e, f];
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "white";
  }
  link.style.color = "#4AD7D1"; 
}

a.addEventListener("click", function () {
  changeLinkColor(a);
});

b.addEventListener("click", function () {
  changeLinkColor(b);
});

c.addEventListener("click", function () {
  changeLinkColor(c);
});

d.addEventListener("click", function () {
  changeLinkColor(d);
});

e.addEventListener("click", function () {
  changeLinkColor(e);
});

f.addEventListener("click", function () {
  changeLinkColor(f);
});
g.addEventListener("click", function () {
  changeLinkColor(g);
});
