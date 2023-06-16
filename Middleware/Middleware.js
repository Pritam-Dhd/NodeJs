// ❗To use middleware from different components

module.exports=reqFilter1=(req,res,next)=>{
    if(!req.query.password){
        res.send("Please enter password");
    }
    else{
        next();
    }
   
}
