const getResult = async () => {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    let listOfSums = [];
    let listOfGreater = [];
    fs.readFile("./Server/list.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
        var array = data.toString().split("\n");

        for (var i = 0; i < array.length - 2; i++) {
          let sum =
            Number(array[i]) + Number(array[i + 1]) + Number(array[i + 2]);
          listOfSums.push(sum);
        }
        for (var i = 0; i < listOfSums.length - 1; i++) {
          if (listOfSums[i] < listOfSums[i + 1]) {
            listOfGreater.push(listOfSums[i + 1]);
          }
        }

        resolve(listOfGreater.length);
      }
    });
  });
};

module.exports.day1P2 = getResult;
