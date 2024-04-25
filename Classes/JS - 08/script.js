// let chr = prompt("Enter a character");
// if (chr === a || chr === e || chr === i || chr === o || chr === u) {
//     console.log("Chracter is a vowel");
// }
// else {
//     console.log("Character is not a vowel");
// }



// let graduate = confirm("Are you graduate?");
// if (graduate) {
//     let faculty = prompt("Which faculty would you like to choose?");
//     if (faculty === "engineer") {
//         console.log("You are appointed as an engineer.");
//     }
//     else if (faculty === "medical") {
//         console.log("You are appointed as a doctor.");
//     }
//     else if (faculty === "commerce") {
//     let accountantOrHr = prompt("Accountant or Hr?");
//     }
// }
// else {
//     console.log("You are appointed as Peon");
// }



// let students = ["Abbas", "Tauha", "Ahmed"];
// console.log(students);
// console.log(students[1]);
// console.log(students[0], students[1], students[2]);



// let student = [];

// students[0] = "Tauha";
// console.log(student);

// students[1] = "Abbas";
// console.log(student);

// students[2] = "Ahmed";
// console.log(student);

// students[3] = "Fahad";
// console.log(student);




// let number = [5, 7, 9, 11, 15]
// console.log(number.length);



// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let chr = prompt("Enter a character");
// if (vowels.indexOf(chr) !== -1) {
//     console.log("This is a vowel");
// }



let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let chr = prompt("Enter a character to check if it's a vowel or not");

if (vowels.includes(chr)) {
    console.log("This is a vowel");
}