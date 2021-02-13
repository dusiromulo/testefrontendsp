export function formatPrice(price) {
    // toLocaleString not works on android :(
    const strPrice = price.toString();
    let decimalPart = '00';
    let integerPart = strPrice;
    if (strPrice.includes('.')) {
        const parts = strPrice.split('.');
        integerPart = parts[0];
        decimalPart = parts[1].slice(0, 2).padEnd(2, '0');
    }
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${integerPart},${decimalPart}`;
}