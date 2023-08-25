// Step 1: Asynchronous Building Blocks
// Timers

// Step 1: Introduction to Asynchronous JS

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let helloMessage = document.createElement("p");
        helloMessage.textContent = "Hello after 5 seconds!";
        document.body.appendChild(helloMessage)
    }, 5000);
});


let clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    } else {
        hours = hours;
    }
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    clockDiv.textContent = timeString;
}

setInterval(updateClock, 1000);

const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

delayedPromise.then(() => {
    delayedPromise
        .then((message) => {
            console.log(message);
        });
    return "Chained message!";
})
    .then((chainedMessage) => {
        console.log(chainedMessage);
    });
// step2

function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Network Error!");
            }
        }, 3000); // 3 seconds 
    });
}

async function fetchData() {
    try {
        const response = await simulateNetworkRequest();
        console.log(response);

        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1%22");
        if (!postResponse.ok) {
            throw new Error("Failed to fetch post data");
        }

        const postData = await postResponse.json();
        console.log("Fetched post data:", postData);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();

