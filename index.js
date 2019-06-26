let text = prompt('enter a name')

function countVoyelle(text) {

    let match1 = text.match(/[aiueoy]/gi);

    if (match1) {
        console.log(`your name have ${match1.length} vowels`)

        return match1.length
    } else {
        return 0
    }
}

function countConsonant(text) {

    let match2 = text.match(/[bcdfghjklmnpqrstvwxz]/gi);

    if (match2) {
        console.log(`your name have ${match2.length} consonants`)

        return match2.length
    } else {
        return 0
    }
}

function showAlert() {
    let match = countVoyelle(text);
    let match3 = countConsonant(text)
    alert(`your name have ${match} vowels \n your name have ${match3} consonants`)
}


showAlert()