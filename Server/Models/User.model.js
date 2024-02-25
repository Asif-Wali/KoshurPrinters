const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:3,
        max:20,
    },
    email:{
        type:String,
        required: true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        min:8
    },
    phoneNumber:{
        type:String,
        required: true

    },
    isChecked:{
        type:Boolean
    },
    role:{
        type: String,
        default: "user"
    }
});
  const userModel =  mongoose.model("User", userSchema);

module.exports= userModel;