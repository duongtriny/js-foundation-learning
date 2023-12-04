//Callback

// function print(name){
//   console.log(`My name is ${name}`);
// }


// function decorateName(name){
//   console.log(`My fancy name is ${name}`);
// }

// function decorateNameTet(name){
//   console.log(`Happy new year ${name}`);
// }

// function printSomeNames(names, callback){
//   for (const name of names) {
//     callback(name);
//   }
// }

// let names = ["Tony Teo", "Jack Chuoi", "Mr. Mit"];
// printSomeNames(names, print);
// printSomeNames(names, decorateName);
// printSomeNames(names, decorateNameTet);

// Asynchronous
// function doSomething(){
//   console.log("Ahihi");
// }
// setTimeout(doSomething, 3000);

// console.log("Hehehe");
// let x=0;
// function loadDataFromFile(){
//   console.log(x+5);
//   return x+5;
// }

// setTimeout(loadDataFromFile, 3000);
// console.log(x);

//Promise
// let promise = new Promise(function(resolveCallback, rejectCallback){
//   let flag = false;

//   if(flag){
//     setTimeout(()=>{resolveCallback("OK");},3000);
//   }else{
//     setTimeout(()=>{rejectCallback("ERROR");},5000);
//   }
// });

// function aResolveCallback(value){
//   console.log("Ahihih "+ value);
// }

// function aRejectCallback(error){
//   console.log("HHHHHHH "+ error);
// }

// function bResolveCallback(value){
//   console.log("Ahihih "+ value);
// }

// function bRejectCallback(error){
//   console.log("KKKKKK "+ error);
// }


// promise.then(aResolveCallback, aRejectCallback);
// promise.then(bResolveCallback, bRejectCallback);


// promise.then(function(value){
  
// }, (error)=>{

// });
// console.log("Im here");

// function acreage(dai,rong){
//   if (typeof dai != "number" || typeof rong != "number") {
//       throw "input data is invalid";
//   }
//   if (dai == 0 ||  rong == 0) {
//       throw "Edge can't equal 0";
//   }
//   return dai * rong;
// }

// function caculator(acreage ,acreage1){
//    return acreage + acreage1;
// }

// console.log(caculator(acreage(4,3),acreage(7,5)));

// function caculateTwoNumbers(a,b, callback){
//   return callback(a,b);
// }

// function add(a,b){
//   return a+b;
// }

// function sub(a,b){
//   return a-b;
// }

// function mult(a, b){
//   return a*b;
// }

// function dev(a,b){
//   return a/b;
// }

// console.log(caculateTwoNumbers(3,4, add));
// console.log(caculateTwoNumbers(6,4, add));
// console.log(caculateTwoNumbers(3,4, sub));
// console.log(caculateTwoNumbers(3,4, mult));
// console.log(caculateTwoNumbers(3,4, dev));

async function doSomethingAsync(){
  let myPromise = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //   resolve("ABC");
    // }, 3000);

    reject("XYZ");

   
    //fetchData from server || read data from file 1.0.1
  });

  await myPromise.then((value)=>{
    console.log(value);
  }, (reject)=>{
    console.log(reject);
    throw new Error("EX");
  }).catch((err)=>{
    console.log(err.message);
  });
  console.log("VVVVVVVV");
}

doSomethingAsync();
