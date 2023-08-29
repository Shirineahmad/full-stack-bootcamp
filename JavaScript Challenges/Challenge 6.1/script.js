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
    // Step 2: Fetch a Random Fact
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(response=> {
        console.log(respons.text)
    })
    .catch(error => {
        console.log("error",error);
    });