//_____________________________________________________
//------------------------PART ONE---------------------
//-----------------------------------------------------

/*
//STEP 1: Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
var name = prompt("What is your name?");
alert(name.length);
*/

/*
//STEP 2: Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
var name = prompt("What is your full name?");
var numName = prompt("Pick a number between 0 and 10");
alert(name.charAt(numName));
*/

/*
//STEP 3: Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
alert("Your name is: " + firstName + " " + lastName);
*/

/*
//STEP 4: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
var brownFox = "The quick brown fox jumps over the lazy dog";
alert(brownFox.indexOf("fox"));
*/

/*
//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
var brownFox = "The quick brown fox jumps over the lazy fox";
alert(brownFox.lastIndexOf("fox"));
*/

/*
//6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
var brownFox = "The quick brown fox jumped over the lazy dog";
var name = prompt("What is your name?");
alert(brownFox.replace("the lazy dog", name));
*/

/*
//7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
var brownFox = "The quick brown fox jumped over the lazy dog";
var wordPick = prompt("Pick a word from the phrase: \n\"The quick brown fox jumped over the lazy dog\"");
alert(brownFox.search(wordPick));
*/

/*
//8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(old_string.indexOf("the lazy dog"), old_string.length);
alert(new_string.toUpperCase(new_string));
*/


/*
//9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
var brownFox = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(brownFox.toLocaleLowerCase(brownFox.trim));
*/

/*
//10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
var brownFox = "the quick brown fox jumps over the lazy dog";
var firstLetter = brownFox.charAt(0);
alert(brownFox.charAt(0).toUpperCase()+brownFox.slice(1));
*/

//*****************************************************
//********************PART TWO*************************
//*****************************************************

//******Part 1 - Math and Math Functions (5 points)****
//*****************************************************

/*
//1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
var x = prompt("Please pick a number");
console.log(Math.abs(x));
*/

/*
//2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
var x = prompt("Please enter a number with a decimal point");
console.log(Math.ceil(x));
*/

/*
//3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
var x = prompt("Please enter a number with a decimal point");
console.log(Math.floor(x));
*/

/*
//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
var x = prompt("Please pick a number");
var y = prompt("Please pick another number");
var z = prompt("Please pick another number");
var a = prompt("Please pick another number");
var b = prompt("Please pick one more number");
Number(x);
Number(y);
Number(z);
Number(a);
Number(b);
console.log(Math.min(x, y, z, a, b));
console.log(Math.max(x, y, z, a, b));
*/

/*
//5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
var x = prompt("Please pick a number greater than or equal to 4");
console.log(Math.sqrt(x));
*/

//******Part 2 - Date and Date Functions (6 points)****
//*****************************************************

/*
//6.	Create an application that gets the current date. Display that result within the console window.
var d = new Date();
console.log(d.toDateString());
*/

/*
//7.	Create an application that gets the number of days in a month. Display that result within the console window.
var d = new Date();
var month = d.getMonth();
if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
    console.log("There are 31 days this month");
} else if (month == 3 || month == 5 || month == 8 || month == 10){
    console.log("there are 30 days this month");
}else{
    console.log("There are only 28 days this month");
};
*/

/*
//8.	Create an application that gets the month name from a particular date. Display that result within the console window.
var d = new Date();
var month = d.getMonth();
if (month == 0){
    console.log("It is January!");
}else if (month == 1){
        console.log("It is February!");
}else if (month == 2){
        console.log("It is March!");
}else if (month == 3){
        console.log("It is April!");
}else if (month == 4){
        console.log("It is May!");
}else if (month == 5){
        console.log("It is June!");
}else if (month == 6){
        console.log("It is July!");
}else if (month == 7){
        console.log("It is August!");
}else if (month == 8){
        console.log("It is September!");
}else if (month == 9){
        console.log("It is October!");
}else if (month == 10){
        console.log("It is November!");
}else{
    console.log("It is December");
};
*/

/*//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
var d = new Date();
var day = d.getDay();
if (day == 0 || day ==6){
    console.log("It is the weekend!!!");
}else{
    console.log("It's not the weekend, yet. Bummer.");
};*/

/*//10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
var d = new Date();
var day = d.getDay() -1;
if (day == -1){
    console.log("Yesterday was Saturday.");
}else if (day == 0){
        console.log("Yesterday was Sunday.");
}else if (day == 1){
        console.log("Yesterday was Monday.");
}else if (day == 2){
        console.log("Yesterday was Tuesday.");
}else if (day == 3){
        console.log("Yesterday was Wednesday.");
}else if (day == 4){
        console.log("Yesterday was Thursday.");
}else{
        console.log("Yesterday was Friday.");
};*/

/*//11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
var d = new Date();
var day = d.getDay();
if (day == 0 || day == 6){
    console.log("S");
    }else if (day == 1){
        console.log("M");
        }else if (day == 2 || day == 4){
            console.log("T");
            }else if (day ==3){
                console.log("W");
                }else{
                    console.log("F");
                };*/


//******Part 3 - Conditional Logic and Looping Operations (4 points)****
//**********************************************************************

/*
//12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
var x = prompt("Please pick a number");
var y = prompt("Please pick another number");
Number(x);
Number(y);
console.log(Math.max(x, y));
*/

/*
//13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

var uMark = 80;
(uMark <60) ? console.log("Ursula got an F") :
(uMark <70) ? console.log("Ursula got a D") : 
(uMark <80) ? console.log("Ursula got a C") :
(uMark <90) ? console.log("Ursula got a B") : console.log("Ursula got an A!");

var pMark = 77;
(pMark <60) ? console.log("Paul got an F") :
(pMark <70) ? console.log("Paul got a D") : 
(pMark <80) ? console.log("Paul got a C") :
(pMark <90) ? console.log("Paul got a B") : console.log("Paul got an A!");

var hMark = 88;
(hMark <60) ? console.log("Henry got an F") :
(hMark <70) ? console.log("Henry got a D") : 
(hMark <80) ? console.log("Henry got a C") :
(hMark <90) ? console.log("Henry got a B") : console.log("Henry got an A!");

var tMark = 95;
(tMark <60) ? console.log("Tabitha got an F") :
(tMark <70) ? console.log("Tabitha got a D") : 
(tMark <80) ? console.log("Tabitha got a C") :
(tMark <90) ? console.log("Tabitha got a B") : console.log("Tabitha got an A!");

var lMark = 80;
(lMark <60) ? console.log("Lucy got an F") :
(lMark <70) ? console.log("Lucy got a D") : 
(lMark <80) ? console.log("Lucy got a C") :
(lMark <90) ? console.log("LUcy got a B") : console.log("Lucy got an A!");
*/

/*
//14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

for (var x = 1; x<= 15; x++){
    if (x % 2==0){
        console.log("Number is Even.");
    }else{
        console.log("Number is Odd.");
    }
};
*/

/*
//15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
for (var x = 1; x<= 100; x++){
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz");
    }else if (x % 5 == 0){
        console.log("Buzz");
    }else if (x % 3 == 0){
        console.log("Fizz")
    }else{
        console.log(x);
    }
};
*/

//******Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)****
//*************************************************************************
/*
//1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
var ready = window.confirm("Are you ready to play?");
if (ready == true){
    window.alert("Awesome, our hero is waiting!");
}else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

//2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

//3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right)?");

//4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
switch (direction){
    case "forward":
        alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
    case "right":
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
};
//5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
/*var rate = prompt("Please rate our game on a scale of 1 to 10");
if (rate >=6){
    alert("Thank you, we will continue to make improvements to the game!");
}else{
    alert("Whatever, you weren’t very good at this game anyway!");
}*/

/*//6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
var rate = prompt("Please rate our game on a scale of 1 to 10");
if (rate >= 1 && rate <= 10){
    if (rate >=6){
    alert("Thank you, we will continue to make improvements to the game!");
    }else{
    alert("Whatever, you weren’t very good at this game anyway!");
    }
}else{
    rate = 10;
    alert("Thank you, we will continue to make improvements to the game!");
}
*/


//******Part 5 - The “Coin Flip” Game (5 points)*****
//***************************************************

/*var coinFlip = Math.random();
var choice = prompt("Heads or Tails?");
if(coinFlip <= .5){
     coinFlip = "heads";
}else{
    coinFlip = "tails";
    };
            
if(coinFlip == "heads" && choice == "heads"){
    alert("The flip was heads and you chose heads...you win!");
}else if(coinFlip == "heads" && choice == "tails"){
        alert("The flip was heads but you chose tails...you lose.");
    }else if(coinFlip == "tails" && choice == "heads"){
            alert("The flip was tails but you chose heads...you lose.");   
            }else {
                alert("The flip was tails and you chose tails...you win!");
    }
*/


//******Part 6 - The “Coin Flip” Game Redux (5 points)*****
//*********************************************************


//******Part 7 - The “Coin Flip Streak” Game (5 points)*****
//**********************************************************

/*
var coinFlip 
            
            do{
                coinFlip = Math.round(Math.random());
                if (coinFlip <1) {
                    console.log("Heads");
                }else{
                    console.log("Tails");
                }
            }while (coinFlip <1);
*/


//******Part 8 – Looping a Triangle (5 points)********
//****************************************************
/*
var pound = " ";
for (var i = 1; i <= 7; i++){
    console.log(pound = pound + "#" );
}
*/

//******Part 9 – Odd or Even? (5 points)********
//****************************************************
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 

/*
for (var x = 0; x<= 15; x++){
    if (x % 2==0){
        console.log(x + " is Even.");
    }else{
        console.log(x + " is Odd.");
    }
};
*/








