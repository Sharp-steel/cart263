window.onload = async function(){
    console.log("task 7-8");

    // #1
    let response = await fetch("data/iris.json");
    let json = await response.json();

    // #2
    let possibleColor = ["#5d3fd3","#a73fd3","#d33fb5","#d35d3f","#d3a73f"];
    const irisesWithColours = json.map(iris => {
        return {
            ...iris,
            color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
        };
    });
    console.log("Irises have colours", irisesWithColours);

    // #3
    const filteredIrises = irisesWithColours.filter(iris => iris.sepalWidth < 4);
    console.log("Iris with sepalWidth < 4", filteredIrises);

    // #4
    const petalLength = irisesWithColours.reduce((sum, iris) => sum + iris.petalLength, 0);
    console.log("petalLength", petalLength);

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
}