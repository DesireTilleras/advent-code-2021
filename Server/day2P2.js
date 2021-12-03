const getResult = async () => {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    fs.readFile("./Server/positions.txt", function (err, data) {
      if (err) {
        reject(err);
      } else {
        var array = data.toString().split("\n");
        let forward = 0;
        let aim = 0;
        let depth = 0;

        for (i = 0; i < array.length; i++) {
          if (array[i].includes("forward")) {
            let forwardNumber = array[i].replace("forward ", "");
            forward += Number(forwardNumber);
            depth += Number(forwardNumber) * aim;
          }
          if (array[i].includes("down")) {
            let downNumber = array[i].replace("down ", "");
            aim += Number(downNumber);
          }
          if (array[i].includes("up")) {
            let upNumber = array[i].replace("up ", "");
            aim -= Number(upNumber);
          }
        }

        let multiplied = forward * depth;

        resolve(multiplied);

      }
    });
  });
};

        module.exports.day2P2 = getResult;

