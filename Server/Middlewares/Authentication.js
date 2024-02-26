const jwt= require("jsonwebtoken");
require("dotenv").config
const Authentication=(req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(200).json({status:false, msg:"Please Login Again"})
    }
    const token= req.headers.authorization.split(" ")[1];
    
    jwt.verify(token,process.env.JSON_Secret,function(err, decoded){
        
        if(err){
            res.status(200).json({status: false, msg:"Session timed out. Please Login again", task:true})
        }
        else{
            console.log(decoded);
            req.body.email= decoded.email
            next();
        }
    })
}

module.exports={
    Authentication
}