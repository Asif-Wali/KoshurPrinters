 const userModel=require("../Models/User.model.js")
 const bcrypt= require("bcrypt");
 module.exports.SignUp=async(req, res, next)=>{
    const {name, email, password, phoneNumber, isChecked}= req.body;
    try {
        const emailCheck= await userModel.findOne({email});
        console.log(emailCheck ,"emailCheck");
        if (emailCheck) return res.status(200).json({status:false,msg:"Email already used" })
       const HashedPassword=await bcrypt.hash(password, 5);
        const user = await userModel.create({name, email, password:HashedPassword, phoneNumber, isChecked,});
        console.log(user);
        return res.status(201).json({status: true, msg: "User created Successfully. Login to Continue"});
    } catch (error) {
        res.status(500).json({status:false, msg: 'Internal Server Error'})
        next(error);
    };
    
    


 }


 module.exports.SignIn=async (req, res, next)=>{
    
    try {
        const {email, password}= req.body;
        console.log(req.body);
        const user= await userModel.findOne({email})
        console.log(user);
        if(!user) return res.json({msg:"User doesn't exist", status:false});
        const PasswordCheck=await bcrypt.compare(password, user.password);
        if (!PasswordCheck){
            return res.status(200).json({msg:"Incorrect Password.",status:false})
        }
        return res.status(200).json({status: true, msg: "Logged in Successfully"});
    } catch (error) {
        res.json({status:false, msg:"Internal Sever Error"});
        next(error);
    }
}