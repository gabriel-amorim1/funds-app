import currency from 'currency.js';

export function formatCurrency(amount: number) {
  return currency(amount, {
    decimal: ',',
    separator: '.',
    pattern: '! #',
    precision: 2,
    symbol: 'R$',
    negativePattern: '-! #',
  }).format();
}
