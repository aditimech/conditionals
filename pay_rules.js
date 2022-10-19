let payRate = 17.30;
let hoursWorked = 45;
let grossPay = payRate * hoursWorked;
let fullTimeHours = 40;

let overTime = hoursWorked - fullTimeHours;

if (hoursWorked >= 40) {
     grossPay = (payRate * fullTimeHours) +payRate *(overTime*1.5);
}

console.log(grossPay);
