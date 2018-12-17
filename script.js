var hello = document.getElementById("hello");
var greet = function(){
    alert("Hello World!");
};
hello.addEventListener("click", greet());