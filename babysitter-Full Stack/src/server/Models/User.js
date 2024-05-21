import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
    userId: {
        type:String,
        required:true,
    },userName: {
        type:String,
        required:true,
    
    },
    phone: {
        type: String,
        required: true,
        unique: true,
      },
    password: {
        type:String,
        required:true,
    },gender: {
        type:String,
        required:true,
    }

    

});
const UserModel = mongoose.model("users",UserSchema);
export default UserModel;
