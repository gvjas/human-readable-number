module.exports = function toReadable (number) {
    const nameNumber = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const nameTensNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let res;
    if (number === 0) {
        res = 'zero'
    } else if (number < 20) {
        res = nameNumber[number];
    } else {
        res = `${number / 1000 < 1000 ? '' : nameNumber[parseInt(number / 1000)] + ' thousand'}
                ${number % 1000 < 100 ? '' : nameNumber[parseInt(number % 1000 / 100)] + ' hundred'}
                ${number % 100 < 20 ? nameNumber[number % 100] : nameTensNumber[parseInt(number % 100 / 10)]}
                ${number % 100 < 20 ? '' : nameNumber[number % 10]}`;
 
    }
    res = res.replace(/\s+/g, ' ').trim()
    return res;
}