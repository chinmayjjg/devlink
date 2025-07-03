const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../models/user");

router.post("/register",async(req,res)=>{
    try{
        const{name,username,password}=req.body;
       const existing = await User.findOne({ username });
        if(existing)return res.status(400).json({message:"user already exists"});

        const hashedpassword= await bcrypt.hash(password,10);
        const user=await User.create({name,username,password:hashedpassword});

        res.status(201).json({message:"congratulation you are sucessfully registered"});

    }catch(err){
      res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/login', async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ message: 'Login successful', token, user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
module.exports = router;
