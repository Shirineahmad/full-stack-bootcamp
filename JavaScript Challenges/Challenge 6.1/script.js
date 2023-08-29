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
        console.log(response.text);
    })
    .catch(error => {
        console.log("error",error);
    });
    // Step 3: Rewrite with Async/Await
async function fetchData() {
    try {
        let response2 = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        let data2 = await response2.json();
        console.log(data2)
    } catch (error) {
        console.error("error ", error);
        
    }
};
fetchData();
// 