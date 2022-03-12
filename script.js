
const person1 = {
    name: "Nikolai",
    lastname: "Markalainen",
    age: "23",
    nationality: "finnish"
}
document.getElementById("stringifier").innerHTML=
JSON.stringify(person1);

const jsonText = `{
    "name": "Nikolai",
    "lastname": "Markalainen",
    "age": "23",
    "nationality": "finnish"
}`
const object = JSON.parse(jsonText);
console.log(object);
const main = document.getElementById("main");
console.log(main);
const pTags = document.getElementsByTagName("p");
console.log(pTags);
const pingClassElements = document.getElementsByClassName("ping");
console.log(pingClassElements);