// This function displays the error screen

function incorrectEntry(error){

    // Grab Elements and Remove Image

    const mainDiv = document.getElementById("main-div");
    const mainImg = document.getElementById("main-img");
    const secondDiv = document.getElementById("second-div");
    const thirdDiv = document.getElementById("third-div");
    
    if(mainImg){
        mainDiv.removeChild(mainImg);
    }

    // Create Error and Style Text
    const errorHead = document.createElement("h1");;
    errorHead.textContent = error;
    errorHead.style.fontSize = "20px";
    errorHead.style.textAlign = "center"; 
    
    // Display and Change Main Div
    changeDiv(mainDiv, "absolute", "25%", "40%", "1000px", "250px", "rgba(109, 96, 96, 0.493)", "middle","15px");
    changeDiv(secondDiv, "absolute", "25%", "30%", "500px", "75px", "rgba(109, 96, 96, 0.7)", "middle","15px");
    changeDiv(thirdDiv, "absolute", "0%", "0%", "0px", "0px", "rgba(109, 96, 96, 0.7)", "middle","15px");

    secondDiv.appendChild(errorHead);
}