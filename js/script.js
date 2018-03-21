const urlChuck = 'http://api.icndb.com/jokes/random';

const buttonChuck = document.getElementById('get-joke-chuck');
buttonChuck.addEventListener('click', function() {
    getJokeChuck();
});

const paragraphChuck = document.getElementById('joke-chuck');
function getJokeChuck() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlChuck);
    xhr.addEventListener('load', function() {
        let response = JSON.parse(xhr.response);
        paragraphChuck.innerHTML = response.value.joke;
    });
    xhr.send();
}

getJokeChuck();

// another joke

const urlJoke = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

const buttonJoke = document.getElementById('get-joke');
buttonJoke.addEventListener('click', function() {
    getJoke();
});

const paragraphJoke = document.getElementById('joke');
function getJoke() {
    let randomJoke = new XMLHttpRequest();
    randomJoke.open('GET', urlJoke);
    randomJoke.addEventListener('load', function() {
        let responseJoke = JSON.parse(randomJoke.response);
        paragraphJoke.innerHTML = responseJoke.setup + '  <button id="answer"> Answer </button> <p id="answerP"></p>';
        let answerButton = document.getElementById('answer');
        answerButton.addEventListener('click', function () {
            document.getElementById('answerP').innerHTML = responseJoke.punchline;
        })
    })
    randomJoke.send();
}

