export const convertPriceInStringToNumber = (value: string) =>
  parseInt(value.replace('R$', ''))
