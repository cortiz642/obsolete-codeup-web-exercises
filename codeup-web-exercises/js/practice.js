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
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: true,
//
//     }]
//         for (var i = 0; i < library.length; i++)
// {
//     var book = library[i].title + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else
//     {
//         console.log("You still need to read " + book);
//     }
// }

        //////MORNING WARMUP 4/4/2022 ///////////////////
// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

// function evenNum(array) {
//     var input = [12, 2, 3, 4, 5, 6, 7, 8, 9];
//     for(var i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             console.log(input);
//         }
//     }
//     return input;


    /////////// MORNING WARMUP 4/5/2022 //////////////////////

//     example input: [1,2,3,4,5];
//     expected output: 15
//     some possible test cases to think about:
//         function should be called ‘sumArr’
// function should return a number
//     function should accept an array
//     function should return “sum not available” if array is empty
//     function should handle non-numbers

// }

//// Primary Answer //////
// var  sumArr = [1, 2, 3, 4, 5];
// var sum = 0;
//
// for(var i = 0; i <sumArr.length; i++){
//     sum += sumArr[i];
// }
// console.log(sum);
//
// //// Secondary Answer ///////
// var passedNumbers = [1,'2',3,4,5];
// var result = 0;
// function sumArr(input) {
//     input = passedNumbers.map(Number);
//     if (input === "") return "sum not available";
//     for (var i = 0; i < passedNumbers.length; i++) {
//         result += input[i];
//
//     } return result;
// }
// sumArr(passedNumbers);

///////////////////// MORNING WARMUP 4/6/2022 ///////////////////////////////
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];

// var sortArr = [5, 8, 2, 6, 9, 3, 2];
// sortArr.sort();
// console.log(sortArr);


/////BONUS
// var sortArr = [3, "b", 8, 5, 9, "true”, 4,“xyz”];








