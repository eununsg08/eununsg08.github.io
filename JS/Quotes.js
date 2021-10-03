const quotes= [
    {
        quote:"목표 없이 살아간다는 것은 나침반 없이 항해하는 것과 같다",
        author: "J.러스킨",
    },
    {
        quote:"생각하는 것은 산다는 것이다",
        author: "키케로",
    },
    {
        quote:"말이란 장전된 권총과도 같다",
        author: "사르트르",
    },
    {
        quote:"인생을 가장 멋지게 사는 방법은 가능한 한 , 많은 것을 사랑하는 것이다",
        author: "빈센트 반 고흐",
    },
    {
        quote:"고통없는 인생은 없다",
        author: "오 헨리",
    },
    {
        quote:"계단을 밟아야 계단 위에 올라설수 있다",
        author: "터키속담",
    },
    {
        quote:"절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다",
        author: "L론허바드",
    },
    {
        quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
        author: "괴테",
    },
    {
        quote:"화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
        author: "마크 트웨인",
    },
    {
        quote:"참을 인 세 번이면 호구다",
        author: "박명수",
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
