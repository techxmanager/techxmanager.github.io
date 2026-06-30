console.log("This is loaded from the external JS file");
var name = "Zacahryalion";
let school = "NMHS";
var fun_fact = "I'm an indie 3D Product Designer and Architect";

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Name: ${name}`);

document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>";
document.getElementById("fun_fact").innerHTML = "<b>Fun Fact: </b><i>" + fun_fact + "</i>";
