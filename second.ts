import { myname } from "./first.ts";
import { aiveHi } from "./Utils/util1.ts";

aiveHi();
export const myname2 = myname;

console.log(myname2);
console.log("second.ts"); 

console.log("Testing Diff---3"); 

let func = () => {
  console.log("Function in second.ts");
}
