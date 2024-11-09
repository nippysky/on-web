// FUNCTION TO FORMAT NUMBERS
export function formatNumberCustom(number: number) {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return formattedNumber.replace(/,/g, ', ').replace(/\./g, '. ');
}
