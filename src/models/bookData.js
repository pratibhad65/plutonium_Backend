const mongoose = require('mongoose');

const newSchema= new mongoose.Schema({
bookName : {
    type:String,
    unique: true,

},
authorName :String,
bookCategory :{
    type: String,
    enum:["crime","historical","love"]
},
bookYear: Number

},{ timestamps: true })

module.exports = mongoose.model('Book', newSchema)