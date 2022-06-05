// "use-strict";
// a = function(){
//     return "Helllo world"
// }

// console.log(a())

// var a;

// var x = 3;
console.log("hello")
// var y = "3";
// console.log(y - 3) // Returns "33"
// var obj1 = {
//     address : "Mumbai,India",
//     name : "om",
//     getAddress: function(){
//     console.log(this.name); 
//   }
// }
       
// // var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay" };
// // obj2.getAddress(); 

// obj1.getAddress.call(obj1)


(function awesomeFunction(){
    var a = 2;
  
    multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
  })()
//   console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
let multiplyBy2;
  multiplyBy2();





