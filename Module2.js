var fName = ("Ricardo"); //part 1: declaring var fName 
    console.log (fName);
    
alert("Hello, my name is " + fName); //part 1: displays a welcome message with the first name

const piValue = 3.1415926; //part 2: creating a const piValue that holds the 7 digit pi number
    document.write("The value of Pi is: " + piValue);

let myFavNum = parseFloat(prompt("Enter favorite number: "));//part 3: Entering favorite number
    document.write(" Your favorite number is: " + myFavNum);

let myArea = piValue * Math.pow(myFavNum, 2);//part 4: calculating the area using the favorite number
    document.write(" The area is: " + myArea); 

let message = ("Hello " + fName, "You entered " + myFavNum + " as your favorite number. IF that was the radius of a circle, the circle's area would be " + myArea.toFixed(2));//part 5: displaying the content of each variable
    alert(message);//part 6: displaying the message

