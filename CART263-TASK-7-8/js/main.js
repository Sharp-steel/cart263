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

    // #3
    let filteredIrises = irisesWithColours.filter(iris => iris.sepalWidth < 4);

    // #4
    const petalLength = irisesWithColours.reduce((sum, iris) => sum + iris.petalLength, 0);
}