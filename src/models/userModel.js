const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {
        deafult:false
    },
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('UserModel', userSchema)



















// const createUser = async function (req, res) {
//     try{
//     let data = req.body;
//     console.log(data)
//     if(Object.keys(data).length !=0){
//     let savedData = await userModel.create(data);
//     res.status(201).send({msg: savedData})
//     } 
//     else res.status(400).send({msg:"BAD REQUEST"})
//   }
//   catch(err){
//     console.log("This is the error : ",err.message);
//     res.status(500).send({ msg: "Error", error: err.message });
//   };