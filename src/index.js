module.exports = function reverse (n) {  
    let num = n;
    if(num < 0){
        num = Math.abs(num);
    }
    let changeStr = String(num).split('').reverse().join('')
    return +changeStr
}
