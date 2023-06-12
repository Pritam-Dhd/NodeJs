// ❗Importing module from another file

// const a = require("./index")

// a.average(3,4);
// a.percent(3,4);

// ❗Filter function
let arr=[2,3,1,3,0,2,1,6,10,2];

let result =arr.filter((item)=>{
    return item==2;
})
console.log(result);
