window.onload = async function () {
    console.log("task 7-8");

    // #1
    let response = await fetch("data/iris.json");
    let json = await response.json();

    // #2
    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
    const irisesWithColours = json.map(iris => {
        return {
            ...iris,
            color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
        };
    });
    console.log("Irises have colours", irisesWithColours);

    // #3
    const filteredIrises = irisesWithColours.filter(iris => iris.sepalWidth < 4);
    console.log("Iris with sepalWidth < 4", filteredIrises.length);

    // #4
    const petalLength = irisesWithColours.reduce((sum, iris) => sum + iris.petalLength, 0);
    const averagePetalLength = petalLength / irisesWithColours.length;
    console.log("petalLength", averagePetalLength);

    // #5 - find(): Get an object with petalWidth > 1.0
    const irisWithWidePetal = irisesWithColours.find(iris => iris.petalWidth > 1.0);
    console.log("Iris with petalWidth > 1.0:", irisWithWidePetal);

    // #6 - some(): Check if any object has petalLength > 10
    const hasPetalLengthOver10 = irisesWithColours.some(iris => iris.petalLength > 10);
    console.log("Any iris with petalLength > 10?", hasPetalLengthOver10);

    // #7 - some(): Check if any object has petalLength == 4.2
    const hasPetalLength42 = irisesWithColours.some(iris => iris.petalLength === 4.2);
    console.log("Any iris with petalLength == 4.2?", hasPetalLength42);

    // #8 - every(): Check if all objects have petalWidths < 3
    const allPetalWidthsUnder3 = irisesWithColours.every(iris => iris.petalWidth < 3);
    console.log("All irises have petalWidth < 3?", allPetalWidthsUnder3);

    // #9
    const allSepalWidthsOver = irisesWithColours.every(iris => iris.sepalWidth > 1.2);
    console.log("All irises have sepalWidth > 1.2", allSepalWidthsOver);

    // #10
    const irisesWithColoursSorted = irisesWithColours.toSorted((a, b) => a.petalWidth - b.petalWidth);
    console.log("All irises colours are sorted", irisesWithColoursSorted);

    // #11 
    /**
     * press space to start
     * double click to change color 
     * 
     */
    let irisCanvas = document.createElement("canvas");
    irisCanvas.classList.add("iris");
    irisCanvas.style.width = "100%";
    irisCanvas.style.height = "100%";
    const context = irisCanvas.getContext("2d");

    irisCanvas.width = window.innerWidth;
    irisCanvas.height = window.innerHeight;





    const fontSize = 40;
    let fontColor = '#0F0';
    const columns = window.innerWidth / fontSize;
    const rainDrop = [];

    const matrixColors = [
        "#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"
    ];

    for (let i = 0; i < columns; i++) {
        rainDrop[i] = 1;
    }

    const columnData = [];
    for (let i = 0; i < columns; i++) {
        columnData[i] = irisesWithColoursSorted[i % irisesWithColoursSorted.length];
    }

    console.log(irisesWithColoursSorted[0]);

    document.body.appendChild(irisCanvas);

    let frameCounter = 0;
    const speedFactor = 5;
    let PlayAnimation = true;
    let animationID = null;


    function draw(color) {

        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, irisCanvas.width, irisCanvas.height);
        context.fillStyle = color;
        context.font = `${fontSize}px monospace`;
        //context.textBaseline = "top";

        frameCounter++;

        for (let i = 0; i < rainDrop.length; i++) {
            const dataObject = columnData[i];
            const text = JSON.stringify(dataObject);

            context.fillText(text, i * fontSize, rainDrop[i] * fontSize);

            if (frameCounter % speedFactor === 0) {

                if (rainDrop[i] * fontSize > irisCanvas.height && Math.random() > 0.975) {
                    rainDrop[i] = 0;
                }
                rainDrop[i]++;
            }
        }
        if (PlayAnimation) {
            animationID = requestAnimationFrame(() => draw(fontColor));
        }
    }
    // setInterval(draw(fontColor), 300);


    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.key === " " && PlayAnimation) {
            PlayAnimation = false;
            cancelAnimationFrame(animationID);
        }
    });

    document.addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.key === " ") {
            PlayAnimation = true;
            draw(fontColor);
        }
    });

    document.addEventListener("dblclick", (event) => {
        const randomColor = matrixColors[Math.floor(Math.random() * matrixColors.length)];
        fontColor = randomColor;
        console.log(fontColor);

    });
}

// #12
// report for task 1 - 10
//  
//#1 sepalLength sepalWidth petalLength petalWidth species
//#2 add color 
//#3 146
//#4 3.7586666
//#5 {sepalLength: 7, sepalWidth: 3.2, petalLength: 4.7, petalWidth: 1.4, species: 'versicolor', …}
//#6 false
//#7 true
//#8 true
//#9 true
//#10 sort 
//#11 visual 

/**
 * #12 I made a matrix visual effect, the content is from the irisesWithColoursSorted.
 * according to the width of the window, I divide the width by the fontsize to make sure
 * the font fit the width.
 * each column is assigned to an object 
 * draw() will refresh the canvas on each frame. and the for loop will move data positions downward
 * when the data reach the boundary, there is a chance to reset them to the loop
**/