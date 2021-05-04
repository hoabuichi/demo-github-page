function changeColor(event) {
    console.log(event.target);
    event.target.style.color = "blue";
    event.target.style.textDecoration = "underline";
}

function boldBorder() {
    document.getElementsByTagName('input').style.border = ' 1px solid #c79c60';
    document.getElementsByTagName('input').style.boxShadow = red;
}

function underlineNav() {
    console.log("test");
    document.getElementsByClassName("nav-footer").style.textDecoration = "underline";
}