const getResult = async () => {
  return new Promise((resolve, reject) => {
    let gammaArray = [];
    let epsilonArray = [];

    var fs = require("fs");
    fs.readFile("./Server/day3P1.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
      }
      var array = data.toString().split("\n");

      for (j = 0; j < 12; j++) {
        gammaArray.push(returnMostCommon(j, array));
      }

      for (x = 0; x < gammaArray.length; x++) {
        if (gammaArray[x] === 1) {
          epsilonArray.push("0");
        } else if (gammaArray[x] === 0) {
          epsilonArray.push("1");
        }
      }

      const gammaString = gammaArray.join("");
      const epsilonString = epsilonArray.join("");

      const gammaDecimal = parseInt(gammaString, 2);
      const epsilonDecimal = parseInt(epsilonString, 2);

      const answer = gammaDecimal * epsilonDecimal;
      resolve(answer);
    });
  });
};

function returnMostCommon(index, array) {
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

  if (count1 > count0) {
    mostCommonNumber = 1;
  } else {
    mostCommonNumber = 0;
  }

  return mostCommonNumber;
}

module.exports.day3P1 = getResult;
