import mongoose from "mongoose";
const connectDB = async ()=>{
try {
    const DB_OPTION={
        user="KajalKumari",
        password="kajalkumari",
        authSource="admin",
        dbName="kajalkumari"
    }
    await mongoose.connect("mongodb+srv://iamkajalkumari000:<password>@cluster0.ggvtmki.mongodb.net/",DB_OPTION)
    console.log("database connected sucessfully");
} catch (error) {
    console.log(error);
    
}
}
   