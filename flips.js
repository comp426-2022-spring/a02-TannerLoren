import minimist from "minimist"
import {coinFlips, countFlips } from "./modules/coin.mjs";

const args = (minimist)(process.argv.slice(2))

const number = args.number || 1
if(!Number.isInteger(number)){
    number = 1
}

var flips = coinFlips(number)
console.log(flips)
console.log(countFlips(flips))

