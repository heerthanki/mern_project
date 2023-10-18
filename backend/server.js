const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI).
then(()=>{
    console.log("Connection Established.");
    
    app.listen(process.env.PORT || 8000 , (err)=>{
        if(err) console.log(err);
        console.log("Running successfully at", process.env.PORT);
    });
}).catch((error)=>{
    console.log("error:",error);
});

app.use(userRoute);