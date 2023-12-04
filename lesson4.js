// console.log("Lesson 4")
// let a= "7";
// if(a==5)
//   console.log("Equal 5");
// else if(a==6){
//   console.log("Equal 6");
// }else{
//   console.log("Not Equal");
// }
//dayIndex 0->6
//result string like Monday Tuesday....
// function getDayOfWeek(dayIndex){

// }

// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));

// function getDayOfWeek(dayIndex) {
//   let result;
//   if (dayIndex < 0 || dayIndex > 6) {
//       return "Không phải ngày trong tuần";
//   }
//   else if (dayIndex == 0) {
//       return "Monday";
//   }
//   else if (dayIndex == 1) {
//       return "Tuesday";
//   }
//   else if (dayIndex == 2) {
//       return "Wednesday";
//   }
//   else if (dayIndex == 3) {
//       return "Thursday";
//   }
//   else if (dayIndex == 4) {
//       return "Friday";
//   }
//   else if (dayIndex == 5) {
//       return "Saturday";
//   }
//   else if (dayIndex == 6) {
//       return "Sunday";
//   }
// }

// function getDayOfWeek(dayIndex) {
//   if (dayIndex == 0)
//       return "Monday";

//   if (dayIndex == 1)
//       return "Tuesday";

//   if (dayIndex == 2)
//       return "Wednesday";

//   if (dayIndex == 3)
//       return "Thurday";

//   if (dayIndex == 4)
//       return "Friday";

//   if (dayIndex == 5)
//       return "Saturday";

//   if (dayIndex == 6)
//       return "Sunday";
//   else
//       return "Not a day of week"

// }

// function getDayOfWeek(dayIndex) {
//   if (dayIndex === 0) {
//       return "Monday";
//   } else if (dayIndex === 1) {
//       return "Tuesday";
//   } else if (dayIndex === 2) {
//       return "Wednesday";
//   } else if (dayIndex === 3) {
//       return "Thursday";
//   } else if (dayIndex === 4) {
//       return "Friday";
//   } else if (dayIndex === 5) {
//       return "Saturday";
//   } else if (dayIndex === 6) {
//       return "Sunday";
//   } else {
//       return "Invalid day index";
//   }
// }


// function getDayofWeek(dayIndex){
//   if (dayIndex==0){
//       console.log("Monday")
//   }
//   else if(dayIndex==1){
//       console.log("Tuesday")
//   }
//   else if(dayIndex==2){
//       console.log("Wednesday")
//   }
//   else if(dayIndex==3){
//       console.log("Thursday")
//   }
//   else if(dayIndex==4){
//       console.log("Friday")
//   }
//   else if(dayIndex==5){
//       console.log("Saturday")
//   }
//   else if(dayIndex==6){
//       console.log("Sunday")
//   }
// }

// function getDayOfWeek(dayIndex) {
//   if (dayIndex == 0) {
//       return "Monday";
//   }
//   if (dayIndex == 1) {
//       return "Tuesday";
//   }
//   if (dayIndex == 2) {
//       return "Wednesday";
//   }
//   if (dayIndex == 3) {
//       return "Thursday ";
//   }
//   if (dayIndex == 4) {
//       return "Friday";
//   }
//   if (dayIndex == 5) {
//       "Saturday";
//   }
//   if (dayIndex == 6) {
//       return "Sunday";
//   }
// }

// function getDayOfWeek(dayIndex){        if (dayIndex === 0) {
//   return 'Chủ Nhật';
// } else if (dayIndex === 1) {
//   return 'Thứ Hai';
// } else if (dayIndex === 2) {
//   return 'Thứ Ba';
// } else if (dayIndex === 3) {
//   return 'Thứ Tư';
// } else if (dayIndex === 4) {
//   return 'Thứ Năm';
// } else if (dayIndex === 5) {
//   return 'Thứ Sáu';
// } else if (dayIndex === 6) {
//   return 'Thứ Bảy';
// } else {
//   return 'Not invalid';
// }
// }

// let a = "7";
// if (a == 5)
//   console.log("Equal 5");
// if (a == 6) {
//   console.log("Equal 6");
// }
// if (a != 5 && a != 6) {
//   console.log("Not Equal");
// }

// false
// undefined
// null
// 0
// NaN
// the empty string ("")

// if(Infinity){
//   console.log("Haha")
// }else{
//   console.log("Hihi")
// }

// function add(a, b){
//   if(a!=undefined && b!=undefined && a!=null && b!=null && typeof a == "number" && typeof b == "number"){
//     return a+b;
//   }else{
//     return null;
//   }
// }
// let a = 0;
// function learnSwitch(a) {
//   let obj = {x:1};
//   switch (a) {
//     case 0:
//       console.log("A o day ne!!");
//       break;
//     case "1":
//       console.log("B o day ne!!");
//       break;
//     default:
//       console.log("Leu leu");
//   }
// }

// learnSwitch(0);
// learnSwitch("1");
// learnSwitch({x:1});
// learnSwitch(1);

// function getDayOfWeek(dayIndex) {
//   switch (dayIndex) {
//       case 0:
//           return "Monday";
//       case 1:
//           return "Tuesday";
//       case 2:
//           return "Wednesday";
//       case 3:
//           return "Thursday";
//       case 4:
//           return "Friday";
//       case 5:
//           return "Saturday";
//       case 6:
//           return "Sunday";
//       default:
//           return "Not a day of the week";
//   }
// }

// function getDayOfWeek(dayIndex) {
//   switch (dayIndex) {
//       case 0:
//           return "Monday";
//           break;
//       case 1:
//           return "Tuesday";
//           break;
//       case 2:
//           return "Wednesday";
//           break;
//       case 3:
//           return "Thursday";
//           break;
//       case 4:
//           return "Friday";
//           break;
//       case 5:
//           return "Saturday";
//           break;
//       case 6:
//           return "Sunday";
//           break;
//       default:
//           return "Not a day of week";
          
//   }
// }

// function getDayOfWeek(dayIndex){
//   let day = "";
//   switch (dayIndex){
//       case 2:
//           day = "Monday";
//           break;
//       case 3:
//           day = "Tuesday";
//           break;
//       case 4:
//           day = "Wednesday";
//           break;
//       case 5:
//           day = "Thursday";
//           break;
//       case 6:
//           day = "Friday";
//           break;
//       case 7:
//           day = "Saturday";
//           break;
//       default:
//           day = "Sunday";
//           break;
//   }
//   return day;
// }

// let a = 0;
// function learnSwitch(a) {
//   let obj = {x:1};
//   switch (a) {
//     case 0:
//       console.log("A o day ne!!");
//       break;
//     case "1":
//     case "2":
//       console.log("B o day ne!!");
//       break;
//     default:
//       console.log("Leu leu");
//   }
// }

// learnSwitch(0);
// learnSwitch("1");
// learnSwitch("2");
// learnSwitch(1);

// function add(a,b){
//   if(typeof a != 'number' || typeof b!="number"){
//     throw "Invalid input";
//     console.log("Abc");
//   }
//   console.log("def");
// }
// add("a", 1);

// function getMonthName(mo) {
//   mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//   const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//   ];
//   if (months[mo]) {
//     return months[mo];
//   } else {
//     throw new Error("InvalidMonthNo"); // throw keyword is used here
//   }
// }

// try {
//   // statements to try
//   monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//   console.log("Aaaaaaaa");
// }

// monthName = getMonthName(myMonth);

// function divide(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//       throw Error("Invalid data");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(null, 2));
//   console.log("hehehe");
// } catch (error) {
//   console.log("Hahahaa")
// } finally{
//   console.log("finally");
// }

// TypeError
// RangeError
// EvalError
let abc;
try{
  console.log(abc(aaa));
}catch(error){
  console.log(error.message);
  abc=0;
}
