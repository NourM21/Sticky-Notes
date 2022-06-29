let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let cancelIcon = document.getElementById("cancel-icon");
let i = 0;

checkIcon.addEventListener("click", function () {
    createNote();
});
cancelIcon.addEventListener("click", function () {
    typeNote();
});

function createNote () {
    let noteText = document.getElementById("note-text").value;
    let node0 = document.createElement("div");
    let node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width: 250px; height: 250px; padding: 25px; margin-top: 10px; overflow: hidden; font-size: 20px; box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);");
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);
    
    container2.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function () {
        node0.style.transition = ".5s";
        node0.style.transform = "scale(1.1)";
    });
    node0.addEventListener("mouseleave", function () {
        node0.style.transform = "scale(1)";
    });
    node0.addEventListener("dblclick", function () {
        node0.remove();
    });

    document.getElementById("note-text").value = '';
};

function typeNote () {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
};

function margin () {
    let randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
};

function rotate () {
    let randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};

function color () {
    let randomColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i > randomColor.length - 1) {
        i = 0;
    }
    return randomColor[i++];
};