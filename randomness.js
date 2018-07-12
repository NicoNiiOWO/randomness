//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){
    console.log(Math.random() * 21);
}
randomNumber();

function randomLetter(){
    var letter = Math.random() * alphabet.length;
    console.log(alphabet.charAt(letter));
}
randomLetter();

function randomFood(){
    var food = Math.floor(Math.random() * foods.length);
    console.log(foods[food]);
}
randomFood();

function randomStudent(){
    var student = Math.floor(Math.random() * students.length);
    console.log(students[student])
}
randomStudent();

function randomGroup(){
    var group = [];
    for(i = 0; i < 3; i++){
        group.push(students[Math.floor(Math.random() * students.length)]);
    }
    console.log(group);
}
randomGroup();