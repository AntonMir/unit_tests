const delay = (callback, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms)
    })
}

// delay(() => 1 + 1, 1000)
//     .then(res => console.log(res))

// delay(() => 2 + 2, 2000)
//     .then(res => console.log(res))

module.exports = delay