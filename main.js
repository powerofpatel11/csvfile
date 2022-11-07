const csv=require("csv-parser")
const  fs=require("fs")
const mongoose=require("mongoose")
const url="mongodb+srv://vaibhav11:vaibhav11@cluster0.uzq4egi.mongodb.net/vaibhav12?retryWrites=true&w=majority"


mongoose.connect(url).then(()=>{
    console.log("db.connected !!!");
}).catch(err=>{
    console.log(err);   
})


// const result=[];
// fs.createReadStream("simple.csv")
// .pipe(csv({}))
// .on("data",(data)=>result.push(data))
// .on("end",()=>{
//     console.log(result);
// })




