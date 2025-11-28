function timer(duration, onComplete) {
    console.log(`Timer started for ${duration} ms...`);

    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}
function displayMessage(message) {
    console.log(message);
}
timer(2000, displayMessage);