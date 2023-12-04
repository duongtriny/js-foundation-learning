// let arr = [1,2,5,66,77,88];
// function sumOfArray(arr){
//   if( arr instanceof Array){
//     let result =0;
//     let i =0;
//     while(i<arr.length){
//       result += arr[i];
//       i++;
//     }
//     return result;
//   }
//   return null;
// }

// console.log(sumOfArray(arr));

//Viet function nhan vao 1 arr va tra ve 1 array bao gom cac so chan
// function getEvenNumber(arr){
//   if(arr instanceof Array){
//       let result = [];
//       let i = 0;
//       while(i < arr.length){
//           if(arr[i] % 2 == 0){
//               result.push(arr[i]);
//           }
//           i++;
//       }
//       return result;
//   }
//   return null;
// }


// function locSoChan(arr){
//   if(arr instanceof Array && arr.length > 0){
//       let arraySoChan = [];
//       let i = 0;
//       const length = arr.length;
//       while(i < length){
//           if(arr[i] %2 === 0){
//               arraySoChan.push(arr[i]);
//           }
//           i++;
//       }
//       return arraySoChan;
//   }
//   return null;
// }

// console.log(locSoChan(arr))

// let arr = [1,2,5,66,77,88];
// function sumOfArray(arr){
//   if( arr instanceof Array){
//     let result =0;
//     let i =0;
//     // while(i<arr.length){
//     //   result += arr[i];
//     //   i++;
//     // }
//     do{
//       result += arr[i];
//       i++;
//     }while(i<arr.length);
//     return result;
//   }
//   return null;
// }

// console.log(sumOfArray(arr));

// do{
//   console.log("Im here");
// }while(false);

// while(false){
//   console.log("Im here");
// }

// function findNumber(n){
//   do{
//     if(n%2===0){
//       console.log(n);
//     }
//     n--;
//   }while(n>0)
// }

// console.log(findNumber(20))

//function nhan vao so N tinh tong cac so be hon N va chia het cho 2 va chia het cho 3
// function sumOfNumber(n){
//   let result = 0;
//   do{
//       if(n % 2 == 0 && n % 3 == 0){
//           result += n;
//       }
//       n--;
//   }while(n > 0);
//   return result;
// }
// console.log(sumOfNumber(20));

// function tinhTong (N){
//   let tong = 0;
//   let i = 0;

//   while(i < N){
//       if(i%2 === 0 && i%3 === 0){
//           tong += i;
//       }
//       i++;
//   }
//   return tong;
// }

// console.log(tinhTong(20));

// function findNumber(n) {
//   let i=0;
//   let sum=0;
//   do {
//       if (i % 2 === 0 && i%3 ===0 && i < n) {
//           sum += i;
//       }
//       i++;
//   }
//   while (i < n);
//   return sum
// }
// console.log(findNumber(20));



// for(1->khoi tao; 2->dieu kien ; 4->thuc hien sau block X){
//   3->block X
// }
// let a =[21,3,6456,5,6];
// for(let i = 0; i<a.length; i++){
//   console.log(a[i]);
// }
// for(;a.length; ){
//   console.log("Ahihi doan xem");
// }

// for(;;){
//   console.log("Ahihi doan xem");
// }


//function nhan vao so N tinh tong cac so be hon N va chia het cho 2 va chia het cho 3
// function sumNumber1(n) {
//   let result = 0;
//   let count =0;
//   for (let i = 0; i < n; i++) {
//     count++;
//       if (i % 3 === 0 && i % 2 === 0) {
//           result += i;
//       }
//   }
//   console.log("Ahihi "+ count);
//   return result;
// }

// function sumNumber2(n) {
//   let result = 0;
//   let count = 0;
//   for (let i = 3; i < n; i+=3) {
//     count++;
//       if (i % 3 === 0 && i % 2 === 0) {
//           result += i;
//       }
//   }
//   console.log("Ahehe "+ count);
//   return result;
// }

// console.log(sumNumber1(1000));
// console.log(sumNumber2(1000));

// function tinhTong(N) {
//   try {
//       if (N >= 0 && Number.isInteger(N)) {
//           let tong = 0;
//           for (let i = 0; i < N; i++) {
//               if (i % 2 === 0 && i % 3 === 0) {
//                   tong += i;
//               }
//           }
//           return tong;
//       } else {
//           throw new Error(“Error”);
//       }
//   } catch (error) {
//       console.error(error.message);
//       return undefined;
//   }
// }

// console.log(tinhTong(20));
// let n=20;
// while(n>0){
//   console.log(n);
//   n-=3;
//   if(n%2==0){
//     break;
//   }
// }

//viet function tim so dau tien chi het cho 5 voi input la 1 array gom cac so nguyen, tra ve so duoc tim thay

// let a = [1,7,2332,76456,324324,55,4324];

// function findnum(arr){
//   if(arr instanceof Array && arr.length > 0){
//       for(let i = 0 ; i < arr.length; i++){
//           if(arr[i] % 5 === 0){
//               return arr[i];
//           }
//       }
//   }
//   return null;
// }
// console.log(findnum(a));

// function timSoChiaHetCho5(arr) {
//   if (arr instanceof Array && arr.length > 0) {
//       let result = null;
//       for (let i = 0; i < arr.length; i++) {
//           if (arr[i] % 5 === 0) {
//               result = arr[i];
//               break;
//           }
//       }
//       return result;
//   }
//   return null;
// }

// console.log(timSoChiaHetCho5(a));

// firstFor:for(let i=0; i<5; i++){
//   console.log("i: "+i);
//   secondFor: for(let j =0; j<7; j++ ){
//     console.log("j: "+j);
//     if(j==3){
//       continue firstFor;
//     }
//   }
// }

// let student = {
//   studentName: "Son",
//   age:20,
//   address: "123 Tran Tan"
// }

// for(key in student){
//   // console.log("Key: "+key +" value: "+ student[key]);
//   console.log(`Key: ${key} value: ${student[key]}`);
// }

// let a= [2133,312321,23453465,534];
// a.xyz="Ahihi";

// for(let k in a){
//   console.log(a[k]);
// }

// for(let k of a){
//   console.log(k);
// }

[
  {
    studentName: "Tan",
    score: 7,
    priority:2
  },
  {
    studentName: "Son",
    score: 5,
    priority:1
  },
  {
    studentName: "Truong",
    score: 8,
    priority:2
  },
  {
    studentName: "Luong",
    score: 7,
    priority:2
  },
  {
    studentName: "Ha",
    score: 6,
    priority:3
  },
  {
    studentName: "Dung",
    score: 9,
    priority:2
  },
  {
    studentName: "Minh",
    score: 7,
    priority:1
  },
  {
    studentName: "Dieu",
    score: 8,
    priority:3
  }
]