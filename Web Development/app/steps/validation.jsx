const checkEmail = (email) => {
  const errors = {};
  if (typeof email !== 'undefined') {
    if (!(email.toLowerCase().endsWith('edu.hk') || email.toLowerCase().endsWith('edb.gov.hk') || email.toLowerCase().endsWith('org.hk'))) {
      errors.$ = { checkEmail: true };
    }
  }
  return errors;
};

const checkEmailMsg = {
  checkEmail: (param, i) => i`errors.errEmail`,
};


const compareEmail = (email1, email2) => {
  const errors = {};
  if ((email1 === email2) && (email2 !== '')) {
    errors.$ = { compareEmail: true };
  }
  return errors;
};

const compareEmailMsg = {
  compareEmail: (param, i) => i`errors.errSameEmail`,
};


const checkTech = (tech) => {
  const errors = {};
  let cnt = 0;

  if (tech) {
    if (tech.includes("Artificial Intelligence (AI)")) {
      cnt += 1;
    }
    if (tech.includes("Big Data")) {
      cnt += 1;
    }
    if (tech.includes("Blockchain")) {
      cnt += 1;
    }
    if (tech.includes("Cloud Computing")) {
      cnt += 1;
    }
  }

  if (cnt == 0)  {
    errors.$ = { checkTech: true };
  }

  return errors;
};

const checkTechMsg = {
  checkTech: (param, i) => i`errors.errTechDetails`,
};

const checkDatePeriod = (fromMonth, fromYear, toMonth, toYear) => {
  const errors = {};
  const frDate = new Date(fromYear, fromMonth - 1, 1, 0);
  const toDate = new Date(toYear, toMonth - 1, 1, 0);
  const now = new Date();
  if (toDate.getTime() < frDate.getTime()) {
    errors.$ = { checkDatePeriod: true };
  }
  if (now.getTime() > frDate.getTime() || now.getTime() > toDate.getTime()) {
    errors.$ = { checkDatePeriod: true };
  }

  return errors;
};

const checkDatePeriodMsg = {
  checkDatePeriod: (param, i) => i`errors.errDatePeriod`,
};

const checkDateSchoolYear = (fromMonth, fromYear, toMonth, toYear) => {
  const errors = {};
  const frDate = new Date(fromYear, fromMonth - 1, 1, 0);
  const toDate = new Date(toYear, toMonth - 1, 1, 0);
  const last = new Date(2020, 7, 1, 0);

  if (last.getTime() < frDate.getTime() || last.getTime() < toDate.getTime()) {
    errors.$ = { checkDateSchoolYear: true };
  }

  return errors;
};

const checkDateSchoolYearMsg = {
  checkDateSchoolYear: (param, i) => i`errors.errDateSchoolYear`,
};


const checkDate = (fromMonth, fromYear, toMonth, toYear) => {
  const errors = {};
  if (typeof fromMonth === 'undefined' || typeof fromYear === 'undefined' || typeof toMonth === 'undefined' || typeof toYear === 'undefined') {
    errors.$ = { checkDate: true };
  }
  return errors;
};

const checkDateMsg = {
  checkDate: (param, i) => i`errors.errDatePeriod`,
};

const checkSecObj = (secobj1, secobj2) => {
  const errors = {};
  let cnt1 = 0;
  let cnt2 = 0;
  
  if (typeof secobj1 === 'undefined' && typeof secobj2 === 'undefined') {
    errors.$ = { checkSecObj: true };
  }

  if (secobj1) {
    cnt1 = secobj1.length;
  }

  if (secobj2) {
    cnt2 = secobj2.length;
  }

  if ((cnt1 + cnt2 == 0) || (cnt1 + cnt2 > 5))  {
    errors.$ = { checkSecObj: true };
  }

  return errors;
};

const checkSecObjMsg = {
  checkSecObj: (param, i) => i`errors.errSecObj`,
};


const checkActType = (actType1, actType2, actType3, actType4, actType5, actType6) => {
  const errors = {};
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let cnt4 = 0;
  let cnt5 = 0;
  let cnt6 = 0;

  if (typeof actType1 === 'undefined' && typeof actType2 === 'undefined' && typeof actType3 === 'undefined' && typeof actType4 === 'undefined' && typeof actType5 === 'undefined' && typeof actType6 === 'undefined') {
    errors.$ = { checkActType: true };
  }


  if (actType1) {
    cnt1 = actType1.length;
  }

  if (actType2) {
    cnt2 = actType2.length;
  }

  if (actType3) {
    cnt3 = actType3.length;
  }

  if (actType4) {
    cnt4 = actType4.length;
  }

  if (actType5) {
    cnt5 = actType5.length;
  }

  if (actType6) {
    cnt6 = actType6.length;
  }

  if (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 == 0) {
    errors.$ = { checkActType: true };
  }  
  return errors;
};

const checkActTypeMsg = {
  checkActType: (param, i) => i`errors.errActType`,
};


const checkShared = (recType1, recType2, recType3) => {
  const errors = {};
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  
  if (typeof recType1 === 'undefined' && typeof recType2 === 'undefined' && typeof recType3 === 'undefined') {
    errors.$ = { checkShared: true };
  }

  if (recType1) {
    cnt1 = recType1.length;
  }

  if (recType2) {
    cnt2 = recType2.length;
  }

  if (recType3) {
    cnt3 = recType3.length;
  }

  if (cnt1 + cnt2 + cnt3 == 0) {
    errors.$ = { checkShared: true };
  }
  return errors;
};

const checkSharedMsg = {
  checkShared: (param, i) => i`errors.errMaterialShared`,
};

const checkItem = (item, num, desc) => {
  const errors = {};
  let amt = 0;
  if (typeof num !== 'undefined') {
    amt = num;
  }

  if (amt > 0 && (!item || !desc)) {
    errors.$ = { checkItem: true };
  }

  if (item && (amt == 0 || !desc)) {
    errors.$ = { checkItem: true };
  }

  if (desc && (amt == 0 || !item)) {
    errors.$ = { checkItem: true };
  }

  return errors;
};

const checkItemMsg = {
  checkItem: (param, i) => i`errors.errItem`,
};

const outofBudget = (val1, val2, val3) => {
  const errors = {};
  let total1 = 0;
  let total2 = 0;
  let total3 = 0;
  if (typeof val1 !== 'undefined') {
    total1 = val1;
  }
  if (typeof val2 !== 'undefined') {
    total2 = val2;
  }
  if (typeof val3 !== 'undefined') {
    total3 = val3;
  }
  if (((total1 + total2 + total3) > 1000000) || (total1 === 0)) {
    errors.$ = { outofBudget: true };
  };
  return errors;
};

const outofBudgetMsg = {
  outofBudget: (param, i) => i`errors.errOutofBudget`,
};

export default {
  checkEmail,
  checkEmailMsg,
  compareEmail,
  compareEmailMsg,
  checkTech,
  checkTechMsg,
  checkDatePeriod,
  checkDatePeriodMsg,
  checkDate,
  checkDateMsg,
  checkDateSchoolYear,
  checkDateSchoolYearMsg,
  checkSecObj,
  checkSecObjMsg,
  checkActType,
  checkActTypeMsg,
  checkShared,
  checkSharedMsg,
  checkItem,
  checkItemMsg,
  outofBudget,
  outofBudgetMsg,
};