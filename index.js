 const exprss=require("express");
 const multer=require("multer");
 const app=exprss();

 const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.destination+"-"+Date.now()+".csv")
        }
    })
 }).single("user_file")

app.post("/upload",upload,(req,resp)=>{
    resp.send("file upload")
})
  
app.listen(8000)