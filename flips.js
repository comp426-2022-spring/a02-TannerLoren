import minimist from "minimist"
import {coinFlips, countFlips } from "./modules/coin.mjs";

const args=minimist(process.argv.slice(2))
const numflips=args['number']

var resultflip=[]

if(numflips!=null){
    resultflip=coinFlips(numflips)
    console.log(resultflip)
    console.log(countFlips(resultflip))
}
else{
    resultflip=coinFlips(1)
    console.log(resultflip)
    console.log(countFlips(resultflip))
}

