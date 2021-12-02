const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors());

app.use(express.json());




const day2P1 = require("./day2P1");
const day2P2 = require("./day2P2");

let res1 = 0;

app.get('/dayOne', async (req, res)=>{
const day1P1 = require('./day1P1')
day1P1.then(res => {res1 = res}).catch(err => console.log(err));
const day1P2 = require('./day1P2');
console.log(res1);
res.send({partOne : res1, partTwo:day1P2.day1P2})

})

app.listen(4000, ()=>{
    console.log("Funkar!");
})