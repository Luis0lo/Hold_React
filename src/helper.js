 export function twoDecimalPlacesPrice(number) {
  if (isNaN(number)) {
    throw new TypeError('it must be a number');
  }
  const str = number.toString().split('.');
  if (str.length > 1) {
    const decimal = str[1].slice(0, 2);
    return Number(str[0] + '.' + decimal);
  }
  return number;
}

