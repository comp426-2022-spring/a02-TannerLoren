import minimist from "minimist"
import { coinFlip } from "./coin.mjs";
import { coinFlips, countFlips } from "./modules/coin.mjs";

let command= minimist((process.argv.slice(2)))
let numflips=command['number']
if(numflips==undefined){
    numflips=1
}
let flips=coinFlips(numflips)
console.log(flips)
console.log(countFlips(flips))
