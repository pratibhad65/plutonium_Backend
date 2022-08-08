const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const first = require('../logger/logger')
const secound = require('../util/helper')
const lodash=require('lodash')
const months =["jan","Feb","march","april","may","june","jully","aug","sep","oct","nov","dec"];
const oddnumber=[1,3,5,7,9,11,13,15,17,19];
const pair=[["horror","The shining"],["drama","titanic"],["thriller","shutter island"],["fantacy","pans labryinth"]]

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    console.log(lodash.chunk(months,3));
    console.log(lodash.tail(oddnumber));
    console.log(lodash.union([2],[1,2],[1,2,3],[1,2,3,4,5],[4,5,6,7,8,9]));
    console.log(lodash.fromPairs(pair));
    abc.printName()
    first.welcome()   // welcome function ko call ker raha hu
    secound.printDate() 
    res.send('My second ever api!')
});




router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
