function main(){
    startScreen();

    // Create Refrence to HTML Elements
    const calculateButton = document.querySelector("button");
    const mainDiv = document.getElementById("main-div");
    const secondDiv = document.getElementById("second-div");
    const thirdDiv = document.getElementById("third-div");
    const mainImg = document.getElementById("main-img");

    //Create Headings 
    const descrHead = document.createElement("h1");
    const numbHead = document.createElement("h1");



    // Main Loop and Button Event
    calculateButton.addEventListener("click", () => {

        
        // Get Input Fields
        const planetInput = document.querySelector("select").value;
        const userMass = parseInt(document.querySelector("input").value);

        // Clear Headings
        secondDiv.innerHTML = "";
        thirdDiv.innerHTML = "";
        descrHead.innerHTML = "";
        numbHead.innerText = "";

        // If the input is a string
        if(isNaN(userMass) || userMass >= 9999){
            incorrectEntry("Please enter a number or a number that is under 9999!");
        }

        // If the input is correct
        else if(userMass && !(planetInput === "Choose here")){

            mainDiv.appendChild(mainImg)


            // Image style and positioning
            mainImg.setAttribute("src", planetData[planetInput].image);
            mainImg.style.position = "absolute";
            mainImg.style.left = "10%";

            // Change second-div's heading
            descrHead.textContent = `The weight of the object on the planet ${planetInput} (In Newtons):`;
            descrHead.style.fontSize = "20px";
            descrHead.style.textAlign = "center";
            
            //Calculate and display third div value
            numbHead.textContent = calculateMass(planetData[planetInput].accleration, userMass);
            numbHead.style.fontSize = "30px";
            secondDiv.appendChild(descrHead);
            thirdDiv.appendChild(numbHead);
            numbHead.style.textAlign = "center";

            thirdDiv.style.display = "inline-block";

            // Create Positioning for the divs
            changeDiv(mainDiv, "absolute", "25%", "40%", "1000px", "500px", "rgba(109, 96, 96, 0.493)", "middle","15px");
            changeDiv(secondDiv, "absolute", "60%", "20%", "300px", "300px", "rgba(109, 96, 96, 0.493)", "middle","15px");
            changeDiv(thirdDiv, "absolute", "65.5%", "40%", "200px", "100px", "rgba(109, 96, 96, 0.493)", "middle","50px");

        // If the mass is filled in, but not the planet
        }else if(userMass && planetInput == "Choose here"){

            incorrectEntry("Please Enter a planet!");

        // If none of the fields are entered
        }else if(!(userMass) && planetInput === "Choose here"){

            incorrectEntry("Please Enter a mass and planet");

        }
    });
}

main();