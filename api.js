const phone = {
    Model: 3578,
    Camera: 48 + "MP",
    Ram: 8 +"Gb",
    Rom: 128 +"Gb",
    Battery: 4000 +"Amp",
    Friends: ["jamal",  "kamal" ,  "samla", "damal", "abal", "kabal"],
    ID: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110]  

};

const convertToJSON = JSON.stringify(phone);
console.log(phone);
console.log("This is after convert in JSON: ", convertToJSON);

const convertFromJSON = JSON.parse(convertToJSON);
console.log("This is after convert from JSON: ",convertFromJSON);