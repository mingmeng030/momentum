const quotes = [
    {
        quote : "Laughter is timeless, Imagination has no age. And dreams are forever.",
        author : "Walt Disney",
    },
    {
        quote : "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        author : "Lion King",
    },
    {
        quote : "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
        author : "Ratatouille",
    },
    {
        quote : "Sometimes the smallest things take up the most room in your heart.",
        author : "Winnie the Pooh",
    },
    {
        quote : "Life is a journey to be experienced, not a problem to be solved.",
        author : "Winnie the Pooh",
    },
    {
        quote : "Anyone can be anything. Nobody can say to me what I should do or not with my dreams!",
        author : "zootopia",
    },
    {
        quote : "The only thing we have to fear is fear itself.",
        author : "zootopia",
    },
    {
        quote : "Don’t close your eyes and look straight ahead. The reality of fear can be different from what you think.",
        author : "Finding Nemo",
    },
    {
        quote : "No more hiding, Dante. I gotta seize my moment!",
        author : "Coco",
    },
    {
        quote : "Success is not given for free. You have to be able to do anything for your goals.",
        author : "Coco",
    },
];

//querySelector(.class)
//querySelector(#id)
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

/*
Math.random*n : 0부터 n-1까지의 수 중 랜덤하게 return
Math.round(n) : n을 반올림
Math.floor(n) : n을 내림
Math.ceil(n) : n을 올림
*/