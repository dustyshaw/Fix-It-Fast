var bfr = document.getElementById("before");
var aft = document.getElementById("after");
var sldr = document.getElementById("slider");
console.log("hello world");
sldr.addEventListener("change", function () {
    var width = sldr.value;
    console.log(width);
    bfr.style.width = width + "px";
});