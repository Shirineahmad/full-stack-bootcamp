//  Challenge 6.1
// Step 1: Simple Delay

function delay(millieseconds) {
    const delayPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve ("done")
        }, millieseconds)

    })
    return delayPromise
}

delay(10000)
    .then((message) => {
        console.log(message) 
    })