function isValidNumber(str) {
    return !isVoidOrEmpty(str) && !isNaN(str);
}

function isVoidOrEmpty(str) {
    return str === "" || str === undefined || str === null;
}

function isValidNumberOrEmpty(str) {
    return isVoidOrEmpty(str) || isValidNumber(str);
}

function lessThanOrEqual(a, b) {
    return a <= b;
}

function greaterThanOrEqual(a, b) {
    return a >= b;
}
