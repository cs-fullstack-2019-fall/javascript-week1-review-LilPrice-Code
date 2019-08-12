//Problem 1
// Asks the user to enter a secret password. Ask a "different" user to guess that password. Continue to ask the different user to enter a password until they get it right or enter 'q'.


// var passWord = prompt("Enter a Password.");
// while (0===0){
//     var Word = prompt("Enter the password or press (q) to quit.");
//     if (Word === passWord){
//         alert("You got it!");
//         break;
//     }
//     else if (Word === "Q" || Word === "q"){
//         alert("Bye");
//         break;
//     }
//     else if(Word !== passWord){
//         alert("Wrong! Try Again!")
//     }
//
//     else {
//         alert("Not a Valid answer.")
//     }
// }


//     Problem 2
// Asks the user to enter a number to add. Keep asking them until they enter a negative number. Print the sum all the numbers entered when the negative number is submitted.

var total = 0;
while (0 ===0){
    var userNum = parseInt(prompt("Enter a number to add."));
    if (userNum < 0){
        alert("The total sum is " + total);
        break;
    }
    else if (userNum >= 0){
        total = total + userNum;
    }
    else{
        alert("INVALID ANSWER")
    }
}