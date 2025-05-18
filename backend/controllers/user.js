import { User } from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const Login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "Invalid data",
                success: false
            });
        };
        
        const userData = await User.findOne({email});     //user data
        if(!userData){
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        };
        
        const checkPasswordMatch = await bcryptjs.compare(password, userData.password);
        if(!checkPasswordMatch){
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }
        
        //generate jwt token and store it in cookie
        const tokenData = {
        id:userData._id
        }
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1h"}); //{payload (data), a secret key, and optional configuration}
        
        return res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: `Welcome back ${userData.fullName}`,
            success: true,
            user: userData
        })

    } catch (error) {
        console.log(" Error ::: in Login controller", error);
    }
}


export const Logout = async (req, res) => {

    return res.status(200).cookie("token", "", {expiresIn: new Date(Date.now()), httpOnly:true}).json({
        message : "user logged out successfully",
        success: true
    })
};


export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        //incomplete data
        if(!fullName || !email || !password){
            return res.status(401).json({
                message : "Invalid data inputes",
                success: false
            })
        }

        //user already registered
        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({
                message : "Email Id already registered",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password , 16);  
        await User.create({
            fullName,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "User Sign-up successfully",
            success: true
        })
        return res;

    } catch (error) {
        console.log("Error:::: in Register ", error);
    }
}