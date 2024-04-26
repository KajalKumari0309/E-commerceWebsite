import { Description } from "@headlessui/react/dist/components/description/description";
import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },


    description:{
        type:String
    }




} ,{
    timestamps:true

}
)
const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema)
export default Blog