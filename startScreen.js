//This function creates and displays the start screen

function startScreen() {

    //Getting Elements
    const mainDiv = document.getElementById("main-div");
    const mainImg = document.getElementById("main-img");

    // Changing Div Style
    changeDiv(mainDiv, "absolute", "25%", "40%", "1000px", "500px", "rgba(109, 96, 96, 0.493)", "middle","15px");

    // Changing Img Style
    mainImg.style.position = "absolute";
    mainImg.style.left = "35%";
    mainImg.style.top = "20%";
    mainImg.style.width = "30%";
    mainImg.setAttribute("src", "images/earth.png");

}