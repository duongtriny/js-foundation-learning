// let map = new Map();

// map.set("name", "Abc");
// map.set("age", 20);

// let obj = {"name": "DEF"};

// console.log(map);
// console.log(obj);

// console.log(map.get("name"));
// console.log(map.has("namsasae"));

// // map.delete("name");
// map.clear();
// console.log(map);

// let obj = {true: "Abc"};
// console.log(obj);

// function doSomething(){
//   console.log("Hahahaha");
// }
// let a = new Map();
// a.set("doSomething", doSomething);

// a.get("doSomething");


// let arr = [1,1,4,5,6,6,7];

// let mySet = new Set(arr);

// console.log(mySet);
// mySet.add(16161);

// console.log(mySet.has(1));
// console.log(mySet.has(21332131));
// console.log(mySet.has(16161));
// console.log(mySet);
// mySet.add(16161);
// console.log(mySet.size);


// let arrB = [...mySet];
// console.log(arrB);
// arrB.push(1);

// let arr = [1,1,4,5,6,6,7];
// let arrB = [...arr, 9,10,11];
// console.log(arrB);

// let obj = {
//   "name": "abc",
//   "age":20
// }

// let objB = {...obj, "address": "dadsfcdsfds vcsdcdscds"}
// console.log(objB);


// console.log(Math.floor(Math.random()*100));

// //Viet function random ra N so, ko trung nhau
// function randomN(N){

//   return [] //co N phan tu ko trung nhau
// }

// function random(N){
//   const arr = [];
//   while(arr.length < N){
//     const randNumber = Math.floor(Math.random() * 100);
//     if (!arr.includes(randNumber)) {
//       arr.push(randNumber);
//     }
//   }

//   return arr;
// }

// console.log(random(12))

//Viet function generate N so va lon min va be hon max
function random(N, min, max) {
  const arr = [];

  while (arr.length < N) {
    const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!arr.includes(randNumber)) {
      arr.push(randNumber);
    }
  }

  if (N > (max - min + 1) || max < min) {
    return null; //error case
  }

  return arr;
}

console.log(random(10, 50, 100))