import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import UserModel from './Models/Users.js';
import bcrypt from "bcrypt";

var app = express();
app.use(cors());
app.use(express.json());
 
const mongoURL ="mongodb+srv://sum:123@cluster0.jaggkgl.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(conn);

//Registration
app.post("/registerUser",async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const gender = req.body.gender;

        const hpassword = await bcrypt.hash(password,10); //encrypt password using hash
        const user = new UserModel({
            name: name,
            email: email,
            phone: phone,
            password: hpassword,
            confirmPassword: confirmPassword,
            gender: gender
          
        });
        await user.save();
        res.send({ user: user, msg: "Added." });
    } 
    catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

//login
app.post("/login",async(req,res)=>{
    try{
        const {rname,rpassword}=req.body;
        const User = await UserModel.findOne({name:rname});
        if(!User){
            return res.status(500).json({msg:"User not found.."});
        }
        else{
            const passwordMatch = await bcrypt.compare(rpassword,User.password); //check if password match with password encrypted in database 
            if(passwordMatch)
                return res.status(200).json({User,msg:"Success.."});
            else
                return res.status(401).json({msg:"Authentication Failed.."});
        }
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
});

//babysitterProfile
app.get("/getbabysitter", async (req, res) => {
    try {
      const Profilebabysitter = await UserModel.aggregate([
        {
          $lookup: {
            from: "babysittertgirl",
            localField: "email",
            foreignField: "email",
            as: "user",
          },
        },
      ]);
      res.json({ user: Profilebabysitter});
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
});

//updatebabysitter
app.post("/updatebabysitter", async (req, res) => {
  try {
      const babysitterId = req.body.pid;
      const Pname = req.body.uname;
      const babysitter = await UserModel.findOne({ _id: babysitterId });
      profile.name = Pname;
      await babysitter.save();
      res.send({ user: babysitter, msg: "Updated." });
  } catch (error) {
      res.status(500).json({ error: "An error occurred" });
  }
});


//deletebabysitter
app.delete("/delbabysitter/:bid", async (req, res) => {
    try {
      const babysitterId = req.params.bid;
      await BabysitterModel.findOneAndDelete({ _id: babysitterId });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
});
  

app.listen(3002,()=>{
    console.log("Server Connected..");
});