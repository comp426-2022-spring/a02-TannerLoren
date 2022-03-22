import minimist from "minimist"
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips, countFlips } from "./modules/coin.mjs";

const command= minimist((process.argv.slice(2)))
numflips=command["number"];
const numflips=numflips.number||1;
let flips=coinFlips(numflips)
console.log(flips)
console.log(countFlips(flips))
