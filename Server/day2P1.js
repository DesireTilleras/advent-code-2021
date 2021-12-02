var fs = require("fs");
fs.readFile("./Server/positions.txt", function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");
  let forward = 0;
  let down = 0;
  let up = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i].includes("forward")) {
      let forwardNumber = array[i].replace("forward ", "");
      forward += Number(forwardNumber);
    }
    if (array[i].includes("down")) {
      let downNumber = array[i].replace("down ", "");
      down += Number(downNumber);
    }
    if (array[i].includes("up")) {
      let upNumber = array[i].replace("up ", "");
      up += Number(upNumber);
    }
  }

  let finalDepth = down - up;

  
  let multiplied = forward * finalDepth;


  module.exports.day2P1 = multiplied;

});
