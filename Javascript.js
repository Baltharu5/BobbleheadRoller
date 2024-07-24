var rollBtn = document.getElementById("rollBtn")
rollBtn.addEventListener("click", rollDice);

function rollDice() {
    var results = "";
    var numDice = Number(document.getElementById("diceNum").value);
    var myArray = []
    
  var total = 0
  var count = 0
  
    for (var i = 0; i < numDice; i++) {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    myArray.push(diceRoll)
    total += diceRoll
    count++

  }
    document.getElementById("diceTotal").innerText = total
  document.getElementById("diceCount").innerText = count
results = "<table>";
    for (var i = 0; i < myArray.length; i+=6 )
    {
        
        results += "<tr><td>" + myArray[i] + "  " + ( myArray[i+1]===undefined ? '' : myArray[i+1]) + "  " + ( myArray[i+2]===undefined ? '' : myArray[i+2]) + "  " + ( myArray[i+3]===undefined ? '' : myArray[i+3]) + "  " + ( myArray[i+4]===undefined ? '' : myArray[i+4])+ "  " + ( myArray[i+5]===undefined ? '' : myArray[i+5]) + "</tr></td>";  
    }

    results += "</table>";

    var div = document.getElementById("associatedAssets");
    div.innerHTML = results;  
    

let array = myArray;
  
let oddNum = 0; 
let evenNum = 0; 

  
for (let index = 0; index < array.length; index++) { 
    if (array[index] % 2 == 0) { 
        evenNum++; 
    } 
    else { 
        oddNum++; 
    } 
} 


  
// Printing the result 
document.getElementById("evens").innerText = evenNum; 
document.getElementById("odds").innerText = oddNum;

let winCon = 0;

for (let index = 0; index < array.length; index++) { 
    if (array[index] === 6) { 
        winCon++; 
    } 
    else { 
        
    } 
} 

if (winCon === 7){
		document.getElementById("winning").innerText = "Exactly 7 rolls of 6! You Win!"
            	}
       else{
       	document.getElementById("winning").innerText = ""
            }
            
console.log(winCon);

}
