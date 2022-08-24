const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment=require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://FunctionUp-Cohort_Pratibha:XTiZIZDxatT9x2cN@cluster0.74qavwu.mongodb.net/Pratibha19-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        const today= moment()
        console.log("today is "+ today.format('MMMM DD YYYY, h:mm:ss a'));
        // let ipAddress = req.ip;
        // let url = req.originalUrl
        // console.log (ipAddress+" , "+url);
        let ip = req. ip
         console.log( ip)


        next()
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
