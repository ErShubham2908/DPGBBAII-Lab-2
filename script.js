let title = document.getElementsByTagName('title')
let btn = document.getElementById('btn');
let inputVal = document.getElementById('uname');


btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btn, inputVal);
    console.log("Hi");
    
})