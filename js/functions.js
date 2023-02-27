function isStringShort(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
isStringShort('проверяемая строка', 20);
isStringShort('проверяемая строка', 18);
isStringShort('проверяемая строка', 10);

const isPalindrom = (string) => {
  const lowString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = lowString.length - 1; i >= 0; i--) {
    reverseString += lowString.at(i);
  }
  return lowString === reverseString;
};
isPalindrom('топот');

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) +
    pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0');
