// Task-1 : Add a click event listener to a button that changes the text content of a pragraph.

const task1button = document.getElementById("task1btn");
task1button.addEventListener("click", () => {
    document.getElementById("task1").innerText = "It's a magic when you clicked the button";
});

const imgOfTask2 = document.getElementById("imageOfTask2")
imgOfTask2.addEventListener("dblclick", () => {
    const togle = document.getElementById("imageOfTask2");
    if(togle.style.visibility = "visible"){
        togle.style.visibility = "hidden";
    }else {
        togle.style.visibility = "visible";
    }
},false)