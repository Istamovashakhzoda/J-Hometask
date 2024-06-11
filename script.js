// FIRST TEASK

// function my_function() {
//   const element = document.querySelector(".lorem1");
//   element.style.color = "red";
//   element.style.fontSize = "20px";
//   element.style.backgroundColor = "yellow";
//   element.style.textAlign = "center";
//   element.style.width = "430px";
//   element.style.height = "350px";
// }

// function my_function2() {
//   const element = document.querySelector(".lorem2");
//   element.style.color = "aqua";
//   element.style.fontSize = "30px";
//   element.style.backgroundColor = "black";
//   element.style.textAlign = "center";
//   element.style.width = "430px";
//   element.style.height = "350px";
// }

// SECOND TASK

function my_function() {
  const elements = document.querySelectorAll(".title1");
  elements.forEach((element) => {
    element.style.color = "lightblue";
    element.style.fontSize = "30px";
    element.style.backgroundColor = "blue";
  });
}
