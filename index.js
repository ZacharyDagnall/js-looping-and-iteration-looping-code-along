// Code your solutions in this file
function writeCards(names) {
    return names.map(function (name) {
        return `Thank you, ${name}, for the wonderful surprise gift!`
    })
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}