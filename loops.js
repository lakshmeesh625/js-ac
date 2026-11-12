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





