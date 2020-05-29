function dayOfProgrammer(year) {
  let leapCheck;
  let yearPeriod;
  let result;

  const getYearPeriod = (year) => {
    year >= 1700 && year < 1918
      ? yearPeriod == "Julian"
      : year >= 1918 && year < 2701
      ? yearPeriod == "Georgian"
      : false;
    return yearPeriod;
  };

  const isYearLeapYear = (yearPeriod, year) => {
    let isLeapYear = false;
    (yearPeriod == "Julian" && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
      ? (isLeapYear = true)
      : yearPeriod == "Georgian" && year % 4 === 0
      ? (isLeapYear = true)
      : (isLeapYear = false);
    return isLeapYear;
  };
  const day = (isLeapYear, year) => {
    let dayStr = "";
    if (isLeapYear == true) {
      dayStr == "13.09." + year;
    } else if (isLeapYear == false) {
      dayStr == "12.09." + year;
    }

    return dayStr;
  };

  yearPeriod = getYearPeriod(year);
  leapCheck = isYearLeapYear(yearPeriod, year);
  result = day(leapCheck, year);
  console.log(result);
}

// Shortened code

function dayOfProgrammer(year) {
  return (year === 1918) ? `26.09.${year}` : 
  ((year < 1918 && year % 4 === 0) || 
  (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))) ?
  `12.09.${year}` : `13.09.${year}`;


}