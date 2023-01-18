const moment=require('moment');
let d=new Date();
console.log(d);

console.log(moment().format('YYYY-MM-DD'));
console.log(moment().format('MM,DD, YYYY'));
console.log(moment().subtract(7, "days").format('YYYY-MM-DD'));
console.log(moment().add(-7, "days").format('YYYY-MM-DD'));
console.log(moment().add(7, "days").format('YYYY-MM-DD'));

console.log("timezone",d.getTimezoneOffset() );//분단위
//-540= -9시간*60

let year=d.getFullYear();
let utcYear=d.getUTCFullYear();
console.log(year,utcYear);

let month=d.getMonth()+1;
let utcMonth=d.getUTCMonth()+1;
console.log(month,utcMonth);

let date=d.getDate();
let utcDate=d.getUTCDate();
console.log(date,utcDate);

let day=d.getDay();
console.log("day", day);  //일0 월1 화2 수3 목4 금5 토6

let hour=d.getHours();
console.log(hour);
let minute=d.getMinutes();
console.log(minute);
let sec=d.getSeconds();
console.log(sec);