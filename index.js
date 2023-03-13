// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];
const messages = []

function writeCards(names, eventNames) {
    for (let a = 0; a < names.length; a ++) {
        let message = `Thank you, ${names[a]}, for the wonderful ${eventNames} gift!`;
        messages.push(message);
    }
return messages
}

function countDown(number) {
    while (number >= 0)
    { console.log(number);
    number --;}
}