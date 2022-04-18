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

export function updateHoldings(data, index, { quantity, price }) {
    const numberOfShares = data[index].quantity + quantity;
    const currentTotal = quantity * price;
    console.log(currentTotal)
    const sharePrice = twoDecimalPlacesPrice((data[index].total + currentTotal) / numberOfShares);
    const totalInvested = data[index].total + currentTotal
    return [...data.slice(0, index), {...data[index], price: sharePrice, total: totalInvested, quantity: numberOfShares}, ...data.slice(index + 1)]
  }