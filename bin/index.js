var forthtranspiler=require("forthtranspiler");
console.log("welcome to forth transpiler cli");
var inputfn=process.argv[1];//.f
var outputfn=process.argv[2]||inputfn+".js";

console.log("input filename",inputfn);
//transpiler..
