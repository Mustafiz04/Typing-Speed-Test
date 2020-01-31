// Dyanmic Typing Test
// 1 - When user pressed start button then only active the textarea else disabled it and vice-versa
// 2 - Every time a new set of lines on tops. Whenever a start button is pressed. Not the Done one.
// 3 - Get the time and change the button text to done.
// 4- Get the end time when user clicked on Done button. Fine the total time taken.
// 5- Find the total words on the setOfWords.
// 6- Find the speed of the user and show it on the top when user clicked on Done.
// 7- Then call the compareWords fun and find the how many of the words are matching and how many not. Display the result on top with speed



const setOfWords = [
    "Hello my name is Mustafiz, Nice to meet you.",
    "A day wasted on others is not wasted on one’s self.",
    "I slept and I dreamed that life is all joy. I woke and I saw that life is all service. I served and I saw that service is joy.",
    "When you are able to shift your inner awareness to how you can serve others, and when you make this the central focus of your life, you will then be in a position to know true miracles in your progress toward prosperity.",
    "Practice kindness all day to everybody and you will realize you’re already in heaven now.",
    "Love only grows by sharing. You can only have more for yourself by giving it away to others.",
    "Let us try to teach generosity and altruism, because we are born selfish. Let us understand what our own selfish genes are up to, because we may then at least have the chance to upset their designs, something that no other species has ever aspired to do.",
    "My religion is very simple. My religion is kindness.",
    "Kindness is a source of relief to the soul of the giver, creating a sense of fortitude that is incomprehensible to those who do not know what kindness is all about.",
    "One who knows how to show and to accept kindness will be a friend better than any possession.",
    "When I was young, I used to admire intelligent people; as I grow older, I admire kind people.",
    "You have to chase your dreams, no matter what. The impossible just takes a little longer. One stroke at a time, one step at a time, the impossible is easy to achieve.",
    "Don’t keep your dreams in your eyes, they may fall as tears. Keep them in your heart so that every heartbeat may remind you to convert them into reality.",
    "You can influence, direct and control your own environment. You can make your life what you want it to be."
];

const msg = document.getElementById('msg');
const err = document.getElementById("err");
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerHTML = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "Done";
    err.innerText = "";
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.floor((wordCount / totalTime)*60);
    let finalMsg = 'You typed total at ' + speed + " words per minutes. ";

    finalMsg += compareWord(msg.innerText, totalStr);

    err.innerText = finalMsg;
}

const compareWord = (str1, str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;

    word1.forEach(function (item, index) {
        if(item == word2[index]){
            count++;
        }
    })
    let errorWords = (word1.length - count);
    return (count + " correct out of " + word1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerHTML = "Start";
        endGame();
    }
})