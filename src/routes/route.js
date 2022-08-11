const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get("/movies/:indexNumber", function(req, res){
//     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index value. less than 0 or greater than array (length - 1) are not valid
//     if(movieIndex<0 || movieIndex>=movies.length) {
//         //if the index is invalid send an error message
//         return res.send('The index value is not correct, Please check the it')
//     }

//     //if the index was valid send the movie at that index in response
//     let requiredMovie = movies[movieIndex]
//     res.send(requiredMovie)
// })


// router.get("/shoes", function(req, res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     res.send("dummy response")
// })

// // uses query params
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get("/films", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//      "id": 2,
//         "name": "Incendies"
//         }, {
//         "id": 3,
//          "name": "Rang de Basanti"
//         }, {
//          "id": 4,
//         "name": "Finding Nemo"
//        }
// ]
//        //send all the films
//       res.send(films) 
// })
// router.get("/films/:filmId", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        let filmId = req.params.filmId

//        //iterate all the films
//        //search for a film whose id matches with the id recevied in request
//        for(let i = 0; i < films.length; i++){
//            let film = films[i]
//            if(film.id == filmId) {
//                //if there is a match return the response from here
//                return res.send(film)
//            }
//        }

//        //if there is no match give an error response
//        res.send("The film id doesn't match any movie")
// })

    

    

// router.get("/solution1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
  
//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }
  
//     let lastDigit= arr.pop()
//     let consecutiveSum= lastDigit * (lastDigit+1) / 2
//     let missingNumber= consecutiveSum - total
  
//     res.send(  { data: missingNumber  }  );
//   });
  
  
  

//   // 10/8/2022 assignmnet Post/API
//   let players =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ]
//        },
//        {
//            "name": "gopal",
//            "dob": "1/09/1995",
//            "gender": "male",
//            "city": "delhi",
//            "sports": [
//                "soccer"
//            ]
//        },
//        {
//            "name": "lokesh",
//            "dob": "1/1/1990",
//            "gender": "male",
//            "city": "mumbai",
//            "sports": [
//                "soccer"
//            ]
//        },
//    ]

//    router.post('/players', function (req, res) {
    
//     let newPlayer = req.body
//     let newPlayersName = newPlayer.name
//     let isNameRepeated = false

//     //let player = players.find(p => p.name == newPlayersName)

//     for(let i = 0; i < players.length; i++) {
//         if(players[i].name == newPlayersName) {
//             isNameRepeated = true;
//             break;
//         }
//     }

//     //undefined is same as false/ a falsy value
//     if (isNameRepeated) {
//         //Player exists
//         res.send("This player was already added!")
//     } else {
//         //New entry
//         players.push(newPlayer)
//         res.send(players)
//     }
// });







  
  
//     // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
//   router.get("/solution2", function (req, res) {
//     //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//     let arr= [33, 34, 35, 37, 38]
//     let abc= arr.length
  
//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }
  
//     let firstDigit= arr[0]
//     let lastDigit= arr.pop()
//     let consecutiveSum= (abc + 1) * (firstDigit+ lastDigit ) / 2
//     let missingNumber= consecutiveSum - total
   
//     res.send(  { data: missingNumber  }  );
//   });
  
 
    
// //  problem
// you will  be give an aaray of person (i.e an array of object) ..each person will have a { name : string ,age :number ,votingstatus :true/false(Boolean)}
// taek input in query params as votingstatus.. and for all the people above that age , change votingstatus as true
// also return am array consisting of only the person that can vote 

// Write a post api to the above 
// take this as sample for array of persons:

router.post("/vote", function (req, res) {

    let person =[
        {
            name : "pk",
            age : 10,
            votingstatus : false
        },
    
        {
            name : "sk",
            age : 20,
            votingstatus : false
        },
        {
            name : "AA",
            age : 70,
            votingstatus : false
        },
        {
            name : "Sc",
            age : 5,
            votingstatus : false
        },
        {
            name : "HO",
            age : 40,
            votingstatus : false
        }
    ]
    
    let votingAge = req.query.votingAge;
      
        for (i = 0; i < person.length; i++) {
          if (person[i].age > votingAge) {
            person[i].votingStatus = true;
          }
        }
      
        //   let result = person.filter((x) => x.age >votingAge).map((x) => (x.votingStatus = true));
      
        res.send({ date: person, status: true });
      });


    




module.exports = router;