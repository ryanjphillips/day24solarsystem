//This function displays the planet based off the user input


function displayPlanet(planetInput, userMass){


    // Create Refrence to HTML Elements
    const mainDiv = document.getElementById("main-div");
    const secondDiv = document.getElementById("second-div");
    const thirdDiv = document.getElementById("third-div");
    const mainImg = document.getElementById("main-img");

    

    //Create Headings 
    const descrHead = document.createElement("h1");
    const numbHead = document.createElement("h1");

    // Clear any text on the headings
    secondDiv.innerHTML = "";
    thirdDiv.innerHTML = "";
    descrHead.innerHTML = "";
    numbHead.innerText = "";

    // Image style and positioning
    mainImg.setAttribute("src", planetData.Earth.image);
    mainImg.style.position = "absolute";
    mainImg.style.left = "10%";

    // Change second-div's heading
    descrHead.textContent = "The weight of an object on Earth:";
    descrHead.style.fontSize = "20px";
    
    //Calculate and display third div value
    numbHead.textContent = calculateMass()

    secondDiv.appendChild(descrHead);

    // Create Positioning for the divs
    changeDiv(mainDiv, "absolute", "25%", "40%", "1000px", "500px", "rgba(109, 96, 96, 0.493)", "middle","15px");
    changeDiv(secondDiv, "absolute", "60%", "20%", "300px", "300px", "rgba(109, 96, 96, 0.493)", "middle","15px");
    changeDiv(thirdDiv, "absolute", "70.5%", "40%", "100px", "100px", "rgba(109, 96, 96, 0.493)", "middle","50px");

}