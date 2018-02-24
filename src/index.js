module.exports = function getZerosCount(n) {
    var i = 5, count = 0;
    while (n / i >= 1){
        count += Math.floor(n / i);
        i *= 5;
    }
    return count;
};
