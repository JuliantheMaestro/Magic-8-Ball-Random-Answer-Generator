//Magic 8-Ball Generator

let randomVal = Math.floor(Math.random()*6);

let userPrompt = prompt("What do you think the value is? 0 - 5?");

switch (randomVal) {

    case "0":
        console.log("The value is 0");
        break;
    case "1":
        console.log("The value is 1");
        break;
    case "2":
        console.log("The value is 2");
        break;
    case "3":
        console.log("The value is3");
        break;
    case "4":
        console.log("The value is 4");
        break;
    case "5":
        console.log("The value is 5");
        break;

}

console.log(` You input ${userPrompt} the correct value was ${randomVal}`);