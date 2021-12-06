const counterArray = [];
  let counter = 0; 

const getResult = async () => {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    fs.readFile("./day4P1.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
        var numberArray = data.toString().split("\n");
        var firstLine = numberArray.shift();
        let numbers = [];
        numbers.push(firstLine);

        let arrayOfNumbers = splitIntoNumbers(numbers);

        for (i = 0; i < arrayOfNumbers.length; i++) {
          let position = checkIfStringContains(arrayOfNumbers[i], numberArray);
        }

        console.log(numberArray);
      }
    });
  });
};

const splitIntoNumbers = (array) => {
  let newArrayOfNumbers = array[0].split(",");

  console.log(newArrayOfNumbers);
  return newArrayOfNumbers;
};

const checkIfStringContains = (number, array) => {
  let whichNumber;
  let whichPosition;

  for (j = 0; j < array.length; j++) {
    if (array[j].includes(number)) {
        counterArray.push(j);
      if (countNumbers(j)) {
        whichNumber = number;
        whichPosition = j;
        break;
      }
    }
  }
  console.log(whichNumber, array[whichPosition]);
};

const countNumbers = (arrayPos) => {  
    if(counter === 5){
        return;
    }

  for (x = 0; x < counterArray.length; x++) {
    if (counterArray[x] == arrayPos) {
      counter++;
      console.log(counter);
    }
    if (counter === 5) {
      return true;
    } 
    else{
        return false;
    }
  } 
};

getResult();
