//execute the pice of code again and again


//print a statement five times using loops


for (i = 0; i < 5; i++){
    console.log("Hello world");
}


//calculate sum of 1 to 5



let sum = 0;
for (i = 1; i <= 5; i++){
    sum = sum + i;

}
console.log(sum);



let sum2 = 0;
for (i = 1; i <= 100; i++){
    sum2 = sum2 + i;
}
console.log(sum2);



//print first 10  numbers using loops


for (i = 1; i <= 10; i++){
    console.log(i);
}


//print first 10 even numbers using loops

for (i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


//infinite loop

/*
for (let i = 2; i > 0; i++){
    console.log(i);
}
*/






//while loop
//while loop executes when a condition satisfies and stops when the condition is false



let j = 1;

while (j <= 10) {
    console.log(j);
    j++;
}





let k = 1;


while (k <= 10) {
    if (k % 2 === 0){
        console.log(k);
    }
    k++;
}


// do while loop


// execute the code at least once and then check the condition if it is true then execute again and again until the condition is false

let l = 1;

do {
    console.log(l);
    l++;
} while (l <= 10);



// for of loop
// for of loop is used to iterate over the elements of a string, array, or other iterable objects

let str = "Hello world";
let size1 = 0;
for (let char of str) {
    console.log(char);
    size1++;
}
console.log("Size of the string is: " + size1);



let arr = [1, 2, 3, 4, 5];

let size = 0;
for (let char of arr) {
    console.log(char);
    size++;
}


console.log("Size of the array is: " + size);






let student = {
    name: "Ashok",
    age : 21,
    CGPA: 7.5,
    passed : true
}




for (let detail in student) {
    console.log(`key = ${detail}, value = ${student[detail]}`)
}






