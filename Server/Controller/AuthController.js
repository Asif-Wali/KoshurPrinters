 const userModel=require("../Models/User.model.js")
 const bcrypt= require("bcrypt");
 const jwt= require("jsonwebtoken");
 require("dotenv").config
 module.exports.SignUp=async(req, res, next)=>{
    const {name, email, password, phoneNumber, isChecked}= req.body;
    try {
        const emailCheck= await userModel.findOne({email});
      
        if (emailCheck) return res.status(200).json({status:false,msg:"Email already used" })
       const HashedPassword=await bcrypt.hash(password, 5);
        const user = await userModel.create({name, email, password:HashedPassword, phoneNumber, isChecked,});
        const token= jwt.sign({email: email},process.env.JSON_Secret ,{ expiresIn: '1h' });
        const userToSend = { ...user.toObject() }; 
        delete userToSend.password;
        return res.status(201).json({status: true, msg: "User created Successfully.Redirecting to Home Page", user:userToSend, token});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:false, msg: 'Internal Server Error'});
    };
    
    


 }
 module.exports.SignIn=async (req, res, next)=>{
    
    try {
        const {email, password}= req.body;
        
        const user= await userModel.findOne({email})
      
      
        if(!user) return res.json({msg:"User doesn't exist", status:false});
        const PasswordCheck=await bcrypt.compare(password, user.password);
        if (!PasswordCheck){
            return res.status(200).json({msg:"Incorrect Password.",status:false})
        }else if(PasswordCheck){
                const token= jwt.sign({email: email},process.env.JSON_Secret ,{ expiresIn: '1h' });
                const userToSend = { ...user.toObject() }; 
                delete userToSend.password;
                return res.status(200).json({status: true, msg: "Logged in Successfully", token, user:userToSend});
        }
        else{
            return res.status(200).json({status: false, msg: "Something went wrong.Please try again later."});
         }
      
    } catch (error) {
        console.log(error);
        res.json({status:false, msg:"Internal Server Error"});
    }
}
