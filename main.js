// Basics of Javascript

/* 
Primitive data types in JS:
Strings
Integers
Booleans
Floats
Arrays
Objects
------------------
Functions in JS
Loops
Scripting v Programming Language
*/

// String variables

var first_name = "Zac";

// display this in JS

console.log(first_name)

var some_number = 2;

// Show all attributes of a document

console.dir(document)

let x;
x=3
console.log(x)

let sum = 5+5
console.log(sum)

let funtime = num => {
    return num * 2;
}
console.log(funtime(4))

// If statements
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(45))

function determineAge2(age){
    return (age < 18) ? 'Miner' : (age >= 18 && age < 65) ? 'Adult not retired' : 'Elderly person not retired'
}

console.log(determineAge2(16))

// LOOooPS

function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    }
    return text;
}

console.log(count_with_while())

// Do while

function counWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += `this number is... ${i} \n`;
        i++;
    }

    while(i > 0 && i < 10)
    return text
}

console.log(counWithDoWhile())

// Create an array

let group_of_names = ['jerry','ben','nash','wen','lex']

console.log(group_of_names[1])
// weird stuff

// Method 1 of looping through an array

function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(showAllNames())

//  Method 2

console.log(group_of_names.forEach(element => console.log(element)))

console.log(group_of_names.toString())

console.log(typeof(group_of_names))

// .map

let b_names = group_of_names.map( i => {
    if (i[0] == 'b'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

// long form of .map()

let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'b'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter(element => element.length > 4)

console.log(long_names)

// .reduce()

const nums = [2,4,3,6,75]

let nums_reduced = nums.reduce( ( accumulator, current_num) => {
    return accumulator + current_num
})

console.log(nums_reduced)


// DNA TO RNA

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}

function DNAtoRNA(dna) {
    var hold = ''
    for(var i =0;i<dna.length;i++) {
       if(dna[i]=="T") {
          hold+="U"
  }
  else{hold+=dna[i]}
  }
  return hold;
        
  }

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
  
function findWords(string, words){
    for(let i = 0; i < words.length; i++){
        if(string.includes(words[i])){
            console.log(`Matched ${words[i]}`)
        } else {
            console.log(`No match for ${words[i]}`)
        }
    }
    return "Finished Preheating"
}
  
findWords(dog_string, dog_names)

var given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
  for(let i = 0; i < arr.length; i+=2){
          arr.splice(i, 1, 'even index')
  }
  return arr
}
  
console.log(replaceEvens(given_arr))