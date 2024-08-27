for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    document.write(i," is even ");
  } else {
    document.write(i," is odd ");
  }
} 

let myNum;
do {
  myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

for (let i = 1; i <= myNum; i++) {
  console.log(i);
}

const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

subjects.forEach((subject) => document.write(subject));

document.write(subjects.join(", "));
