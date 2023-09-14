import mongoose from "mongoose";

function connect(){
    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db =  mongoose.connect(`${process.env.CONN}`).then((res)=>{
        res;
        console.log("Database Connected")
        // return db;
    }).catch((err)=>{console.log(err)})
}

export default connect;