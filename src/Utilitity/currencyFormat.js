export const CurrencyFormat = (number) => {
    if (!number) {
        return "";
    } else {
        let result = new Intl.NumberFormat("en-IN").format(number);
        return "₹" + result;
    }
};