'use strict';

//// CALCULATE ////
//// TAX ////
const calcTax = function () {
  const monthlySalary = document.getElementById('monthly-salary').value * 12;
  let sal = monthlySalary;
  if (sal < 250000) {
    sal = 0;
  } else if (sal >= 250000 && sal < 400000) {
    sal = (sal - 250000) * 0.2;
  } else if (sal >= 400000 && sal < 800000) {
    sal = (sal - 400000) * 0.25 + 30000;
  } else if (sal >= 800000 && sal < 2000000) {
    sal = (sal - 800000) * 0.3 + 130000;
  } else if (sal >= 2000000 && sal < 8000000) {
    sal = (sal - 2000000) * 0.32 + 490000;
  } else {
    sal = (sal - 8000000) * 0.35 + 2410000;
  }
  sal /= 12;
  return sal.toFixed(2);
};
//// SSS ////
const calcSss = function () {
  const monthlySalary = document.getElementById('monthly-salary').value;
  let sal = monthlySalary;
  let n = 80;
  let x = 2250;

  if (sal > 2249.99 && sal < 19750.0) {
    while (x <= sal) {
      x += 500;
      n += 20;
      console.log(x);
      console.log(n);
    }
  } else if (sal > 19750.0) {
    n += 720;
  } else if (sal === '' || sal === 0) {
    n = 0.0;
  } else {
    n = 80;
  }
  return n.toFixed(2);
};
//// PAGIBIG ////
const calcPagIbig = function () {
  const monthlySalary = document.getElementById('monthly-salary').value;
  let sal = monthlySalary;
  if (sal <= 1500) {
    sal = sal * 0.01;
  } else {
    sal = sal * 0.02;
  }
  return sal.toFixed(2);
};
/// PhilHEALTH ////
const calcPhilHealth = function () {
  const monthlySalary = document.getElementById('monthly-salary').value;
  let sal = monthlySalary;
  let n = 100;
  let x = 8999.99;
  if (sal > 8999.99 && sal < 35000.0) {
    while (x <= sal) {
      x += 1000;
      n += 12.5;
    }
  } else if (sal >= 35000.0) {
    n += 337.5;
  } else if (sal === '' || sal === 0) {
    n = 0.0;
  } else {
    n = 100;
  }
  return n.toFixed(2);
};

// first click
const removeHidden = document.querySelector('.inner');
const outerHidden = document.querySelector('.outer');

const btnHid = document.querySelector('.btn');

btnHid.addEventListener('click', function () {
  removeHidden.classList.add('hidden');
  outerHidden.classList.remove('hidden');
  resultBtn.classList.remove('hidden');
  resultHidden.classList.add('hidden');
});

// second click
const resultHidden = document.querySelector('.result');
const resultBtn = document.querySelector('.resultBtn');
const goodBye = document.querySelector('.goodbye');
const infoRes = document.querySelector('.infoRes');
const compRes = document.querySelector('.compRes');
const salRes = document.querySelector('.salRes');
const employeeName = document.querySelector('.employee');
const companyName = document.querySelector('.company');
const salaryName = document.querySelector('.salary');
const info = document.querySelector('.info');
const formHidden = document.querySelector('.form');
const errorMsg = document.querySelector('.error-msg');

//calc
const taxEl = document.querySelector('.tax');
const sssEl = document.querySelector('.sss');
const pagIbigEl = document.querySelector('.pagIbig');
const philHealthEl = document.querySelector('.philHealth');

const eventEl = document.querySelector('.events');
const salaryEl = document.getElementById('monthly-salary');

///// EVENTS /////
// eventEl
//   .addEventListener('keyup', function(e){
//   e.preventDefault();
// if (e.keyCode === 13) {
//   resultBtn.click();
// }
// })
/////// Start event on keyup no need to use mouse! hitting Enter will execute func, keycode for pressing enter(13),////
employeeName.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    resultBtn.click();
  }
});

companyName.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    resultBtn.click();
  }
});

salaryName.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    resultBtn.click();
  }
});

resultBtn.addEventListener('click', function () {
  if (employeeName.value === '') {
    errorMsg.innerHTML = 'Employe Name is required';
  } else if (companyName.value === '') {
    errorMsg.innerHTML = 'Company Name is required';
  } else if (salaryEl.value === '') {
    errorMsg.innerHTML = 'Monthly Salary is required';
  } else {
    formHidden.classList.add('hidden');
    resultHidden.classList.remove('hidden');
    resultBtn.classList.add('hidden');
    goodBye.classList.remove('hidden');
    infoRes.innerHTML = employeeName.value;
    compRes.innerHTML = companyName.value;
    salRes.innerHTML = salaryName.value;
    taxEl.innerHTML = calcTax();
    sssEl.innerHTML = calcSss();
    pagIbigEl.innerHTML = calcPagIbig();
    philHealthEl.innerHTML = calcPhilHealth();

    info.classList.remove('hidden');

    // errorMsg.classList.add('hidden');
    errorMsg.innerHTML = '';
  }
});

// third click
const exitOneBtn = document.querySelector('.exit1');
const exitTwoBtn = document.querySelector('.exit2');

exitOneBtn.addEventListener('click', function () {
  formHidden.classList.remove('hidden');
  resultHidden.classList.add('hidden');
  resultBtn.classList.remove('hidden');
  goodBye.classList.add('hidden');
  info.classList.add('hidden');
  // errorMsg.classList.add('hidden');
  employeeName.value = '';
  companyName.value = '';
  salaryName.value = '';
});

exitTwoBtn.addEventListener('click', function () {
  formHidden.classList.remove('hidden');
  removeHidden.classList.remove('hidden');
  outerHidden.classList.add('hidden');
  goodBye.classList.add('hidden');
  info.classList.add('hidden');
  // errorMsg.classList.add('hidden');
  employeeName.value = '';
  companyName.value = '';
  salaryName.value = '';
});
