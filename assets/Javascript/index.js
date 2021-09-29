// var heading = document.getElementById("head");
// var para = document.getElementsByClassName("para");
// var tags = document.getElementsByTagName("a");
// var tag = document.querySelector(".para");
//
// console.log(para);
// console.log(tag);
// console.log(tags);
// console.log(heading);
//
// heading.innerHTML = "Hi from JS";

var list = document.querySelector(".list");

var arr = ["one", "two", "three"];
arr.push("four");

for (var i = 0; i < arr.length; i++) {
  var element = document.createElement("li");
  var textNode = document.createTextNode(arr[i]);
  element.appendChild(textNode);
  list.appendChild(element);
}
