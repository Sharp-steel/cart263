window.onload = function () {
    console.log("hello json");

    let donut_as_json = {
        id: "0001",
        type: "donut",
        name: "Cake",
        image: "../images/donuts/b.png",
        flavours: [
          { id: "1001", type: "Regular" },
          { id: "1002", type: "Chocolate" },
          { id: "1003", type: "Blueberry" },
          { id: "1004", type: "Devil's Food" },
        ],
     
        toppings: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
      };
    
      let headingTag = document.createElement("h2");
        headingTag.classList.add("donut_name_class");
        document.getElementById("output").appendChild(headingTag);
        headingTag.innerHTML = `Donut Name : <span>${donut_as_json.name}</span>`;
    
        let flavoursArray = donut_as_json.flavours;
      //make a for loop and iterate
      for (flavour of flavoursArray) {
        console.log(flavour);
        let pTag = document.createElement("p");
        pTag.classList.add("donut_flavour_class");
        document.getElementById("output").appendChild(pTag);
        pTag.innerHTML = `Donut flavour : <span>${flavour.type}</span>`;
      }

      let toppingsArray = donut_as_json.toppings;
  for (topping of toppingsArray) {
    console.log(topping);
    let pTag = document.createElement("p");
    pTag.classList.add("donut_topping_class");
    document.getElementById("output").appendChild(pTag);
    pTag.innerHTML = `Donut topping : <span>${topping}</span>`;
};
}

