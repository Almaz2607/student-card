export function getStudentAge(birthYear) {
  const curYear = new Date().getFullYear();
  const age = curYear - birthYear;

  const isLastTwoDigitsFirstGroup = /[2-9][2-4]$/.test(age);
  const isSingleDigitFirstGroup = age >= 2 && age <= 4;
  const isFirstGroup = isSingleDigitFirstGroup || isLastTwoDigitsFirstGroup;

  const isLastTwoDigitsSecondGroup = /[2-9][1]$/.test(age);
  const isSingleDigitSecondGroup = age === 1;
  const isSecondGroup = isSingleDigitSecondGroup || isLastTwoDigitsSecondGroup;

  if (isFirstGroup) return `(${age}года)`;
  if (isSecondGroup) return `(${age}год)`;
  return `(${age}лет)`;
}
