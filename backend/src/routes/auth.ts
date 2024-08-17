import jwt from 'jsonwebtoken';
import  bcrypt  from 'bcryptjs';
import express, {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/user';
console.log("JWT Secret Key:", process.env.JWT_SECRET_KEY);

const router = express.Router();
router.post("/login", [check("email", "Email is required").isEmail(), 

    check("password", "Password with 6 or more character required").isLength({
        min:6,
    }),
], async (req: Request, res: Response)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty())  {

        return res.status(400).json({
            message: errors.array()
        })
    }
    const {email, password} = req.body;
     
    try {
        const user = await User.findOne({  email})
        if(!user){
            return res.status(400).json({message: " Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: " Invalid credentials"});
        }

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d",
            }
        );
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });
        res.status(200).send({message: "User registered OK"});
    }
    catch(error){
console.log(error);
res.status(500).json({message: "Something went wrong"});
    }
    });
    router.get("/", (req: Request, res: Response) => {
        res.status(200).json({ message: "Auth route is working" });
    });
export default router;