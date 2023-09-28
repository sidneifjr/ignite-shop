export const convertPriceInStringToNumber = (value: string) => {
  // @ts-ignore
  return parseInt(Number(value.replace('R$', '').replace(',', '.')) * 100)
}
