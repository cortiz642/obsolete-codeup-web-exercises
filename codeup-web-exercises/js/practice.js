//TODO: Fizzbuzz Activity
//Print numbers 1-100
//if # is divisible by 3 use Fizz
//if # is divisible by 5 use Buzz
//if # is divisible by both 3 and 5 use FizzBuzz

// function fizzBuzz(){
//     for (var i = 1; i <= 100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz");
//         }else if (i % 3 === 0){
//             console.log("Fizz")
//         }else if (i % 5 === 0){
//             console.log("Buzz");
//         }else{
//             console.log(i); //print #'s 1-100
//         }
//     }
// }
// fizzBuzz();

// Imagine the supplied array is like a pack of cards. Write a function to
// shuffle an array in to a completely new and entirely random order, much like
// shuffling a pack of cards.
//     example input: [2,4,6,8]
// expected output: [4,2,8,6];

// function to shuffle an array in a new random order

// var cards = [2, 4, 6, 8];
// shuffle(cards);
// function shuffle(cards) {
//     cards.sort(() => Math.random());
//     console.log(cards);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);
// var random = cards[Math.floor(Math.random() * cards.length)];
// console.log(random);


// cntrl + command + spacebar = emojis

//////// MORNING WARMUP ///////////////
//1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//   return //Something
// };
// 2. Return true if palindrome and false if not
// ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };
// function reverseString(str){
//     return str;
//
// }
// reverseString("hello");

// var reverseString = input.split("").reverse().join("");

// var arr = [3,'g','s',5,'j',8,2,'d',6,'h',9,'l',5,'s',2,3];
// var numbersOnly = (val)=> {
//     if(typeof(val) === 'number'){
//         return val;
//     }
// }
// var number = arr.filter(numbersOnly);
// console.log(number);

//////////MORNING WARMUP 4/1/2022 //////////////////
//Write a function that returns the reading status of each of following books
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: true,

    }]
        for (var i = 0; i < library.length; i++)
{
    var book = library[i].title + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else
    {
        console.log("You still need to read " + book);
    }
}

