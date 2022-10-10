

const square = (num) => {
    if(num <= 1) {

        return 1
    }
    return Math.pow(num, num)
}

square(2)

module.exports = square