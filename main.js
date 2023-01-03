// 
const foo=null
console.log(foo)

// 
let a;
console.log(a)
// 
function calc(b) {
    const a = 10;
    return a + b + 11;
  }
  function bar(x) {
    const y = 3;
    return calc(x * y);
  }
  const baz = bar(7);
  console.log(baz)

// 
  function greeting() {
   sayHi();
  }
  function sayHi() {
    console.log("Hi") ;
  }
  greeting();

//   
function myDisplayer(some) {
   console.log(some) ;
}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
 if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

// 
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 1500); // (*)
  }).then(function (result) { // (**)
    console.log(result); // 2
    return result + 2;
  }).then(function (result) { // (***)
    console.log(result); // 4
    return result + 2;
  }).then(function (result) {
    console.log(result); // 6
    return result + 2;
  });


  //   
function calculateGST( productPrice ) {
    return productPrice * 0.05;
}
console.log(calculateGST(15))



