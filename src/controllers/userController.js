const { request } = require("express")
//const UserModel= require("../models/userModel")
const UserModel=require("../models/bookData")


// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBookData= async function(req,res){
    let data=req.body
    let allSavedData=await UserModel.create(data)
    res.send({msg:allSavedData})
}

const getBookData= async function(req, res){

    let allBook= await UserModel.find()
    res.send({msg:allBook})
} 




// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBookData =createBookData
module.exports. getBookData= getBookData