const getResult = async () => {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    fs.readFile("./Server/day3P1.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
        var array = data.toString().split("\n");

        let oxygenGenerator = returnMostCommon(0, array);
        let scrubber = returnLeastCommon(0, array);

        console.log(oxygenGenerator);
        console.log(scrubber);

        const oxygenGeneratorDecimal = parseInt(oxygenGenerator, 2);
        const scrubberDecimal = parseInt(scrubber, 2);

        const answer = oxygenGeneratorDecimal * scrubberDecimal;
        resolve(answer)
      }
    });
  });
};

function returnMostCommon(index, array) {
  if (array.length === 1) {
    return array[0];
  }
  let count0 = 0;
  let count1 = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i].charAt(index) === "1") {
      count1++;
    } else if (array[i].charAt(index) === "0") {
      count0++;
    }
  }

  let mostCommonNumber;

  if (count1 >= count0) {
    mostCommonNumber = 1;
  } else {
    mostCommonNumber = 0;
  }

  let newArray = [];

  for (y = 0; y < array.length; y++) {
    if (array[y].charAt(index) == mostCommonNumber) {
      newArray.push(array[y]);
    }
  }

  return returnMostCommon(index + 1, newArray);
}

function returnLeastCommon(index, array) {
  if (array.length === 1) {
    return array[0];
  }
  let count0 = 0;
  let count1 = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i].charAt(index) === "1") {
      count1++;
    } else if (array[i].charAt(index) === "0") {
      count0++;
    }
  }

  let leastCommonNumber;

  if (count1 < count0) {
    leastCommonNumber = 1;
  } else if (count1 >= count0) {
    leastCommonNumber = 0;
  }

  let newArray = [];

  for (y = 0; y < array.length; y++) {
    if (array[y].charAt(index) == leastCommonNumber) {
      newArray.push(array[y]);
    }
  }

  return returnLeastCommon(index + 1, newArray);
}

module.exports.day3P2 = getResult;
