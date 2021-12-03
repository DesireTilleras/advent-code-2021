const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors());

app.use(express.json());



app.get('/dayOne', async (req, res)=>{
  let res1 = 0;
  const day1P1 = require("./day1P1");
  day1P1
    .day1P1()
    .then((result) => {
        res1 = result; 
        const day1P2 = require("./day1P2");
        day1P2
          .day1P2()
          .then((result) => {
            res.send({ partOne: res1, partTwo: result });
          })
          .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

    
})



app.get("/dayTwo", async (req, res) => {
    let res1 = 0;
  const day2P1 = require("./day2P1");
  day2P1
    .day2P1()
    .then((result) => {
      res1 = result;
      const day2P2 = require("./day2P2");
      day2P2
        .day2P2()
        .then((result) => {
          res.send({ partOne: res1, partTwo: result });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  
});


app.get("/dayThree", async (req, res) => {
    let res1 = 0;
  const day3P1 = require("./day3P1");
  day3P1
    .day3P1()
    .then((result) => {
      res1 = result;
      const day3P2 = require("./day3P2");
      day3P2
        .day3P2()
        .then((result) => {
          res.send({ partOne: res1, partTwo: result });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  
});


app.listen(4000, ()=>{
    console.log("Funkar!");
})