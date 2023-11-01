export const currencyFormat = currency => {
    return currency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}