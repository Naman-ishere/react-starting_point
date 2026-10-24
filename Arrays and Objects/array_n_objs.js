// Arrays --> A datatype which stores multiple values of multiple types hence adds an important functionality;

let sigma_sigma_boys = ["Naman", "Narendra Modi", "Vladimir Putin", "Adolf Hitler"];
let randomShiiii = [15, "Lalalala", true]; // Many datatypes in a single array;

// Arrays can be accessed using indexing;
console.log(`The most Sigma boy: ${sigma_sigma_boys[0]}`);
console.log(`Number of entries: ${sigma_sigma_boys.length}`);

// Array indexes start at 0. Values can be added with push();
randomShiiii.push("New value");
console.log(randomShiiii);

// Objects --> Similar to arrays, can hold multiple values but the values are paired with keys and values;

let sigmaInfo = {
    name : "Naman",
    age : 18,
    isMature : false
};

// Read values using dot notation or bracket notation;
console.log(sigmaInfo.name);
console.log(sigmaInfo["age"]);

// Objects can be updated and given new properties;
sigmaInfo.isMature = true;
sigmaInfo.country = "India";
console.log(sigmaInfo);
2