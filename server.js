const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const cors=require("cors");
const helmet=require("helmet");
const router = require("./routs/auth");
const verifyToken = require('./middleware/auth');
const uploadRoutes = require("./routs/upload");
const userRoutes = require('./routs/user');

dotenv.config();
connectDB();

const app=express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api", uploadRoutes);
app.use('/api', userRoutes);

app.use("/uploads",express.static("uploads"));
app.use('/api', router);

app.get('/api/private', verifyToken, (req, res) => {
  res.json({ message: 'You are authorized!', userId: req.userId });
});


app.get("/",(req,res)=>{
    res.send("devlink api is running");

});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));