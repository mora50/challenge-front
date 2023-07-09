export const toBRLcurrencyFormat = (value: number) => {
  value = value / 100

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
