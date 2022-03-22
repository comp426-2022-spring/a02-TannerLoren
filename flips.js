import minimist from "minimist"
import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";

const args=minimist(process.argv.slice(2))
const numflips=args["number"] || 1
var resultflip=[]

if(numflips!=null){
    resultflip=coinFlips(numflips)
    console.log(resultflip)
    console.log(countFlips(resultflip))
}
else{
    resultflip=(coinFlips(1))
    onsole.log(resultflip)
    console.log(countFlips(resultflip))
}

