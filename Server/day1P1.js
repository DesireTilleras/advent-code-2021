const getResult = async() => {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    fs.readFile("./Server/newList.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
        var array = data.toString().split("\n");

        let counter = 0;

        for (var i = 0; i <= array.length - 1; i++) {
          if (Number(array[i]) < Number(array[i + 1])) {
            counter++;
          }
        }

        
        resolve(counter);
      }
    });
  });
}
module.exports.day1P1 = getResult;
