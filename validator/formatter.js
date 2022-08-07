function lowercase() {
    let name1 = " PRATIBHA DAMODAR"
    let fullName1 = name1.toLowerCase();
    console.log(fullName1)
    uppercase()
  }
  
  
  function uppercase() {
    let name2 = "pratibha damodar"
    let fullName2 = name2.toUpperCase();
    console.log(fullName2);
    trim()
  }
  
  
  function trim() {
    let name3 = "   pratibha damodar   "
    let fullName3 = name3.trim();
    console.log(fullName3)
  }
  
  
  module.exports.lowercase = lowercase
  module.exports.case2 = uppercase
  