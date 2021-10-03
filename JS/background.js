const images = [
    {
        background:"0.jpg",
        nameOfplace:"그랜드 캐니언(Grand Canyon)",
    },
    {
        background:"1.jpg",
        nameOfplace:"마추 픽추(Machu Picchu)",
    },
    {
        background:"2.jpg",
        nameOfplace:"베네치아(Venezia) / 베니스(Venice) - 이탈리아(Italy)",
    },
    {
        background:"3.jpg",
        nameOfplace:"파리(Paris) - 프랑스(France)",
    },
    {
        background:"4.jpg",
        nameOfplace:"앙코르 와트(Angkor Wat) - 캄보디아(Cambodia)",
    },
    {
        background:"5.jpg",
        nameOfplace:"방콕(Bangkok) - 태국 / 타이(Thailand)",
    },
];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const backgroundName = document.body.querySelector("#backgroundName");

const BGImg = document.createElement("img");

BGImg.src = `image/${chosenImages.background}`;
document.body.appendChild(BGImg);
BGImg.id = "backgroundImage";
backgroundName.innerText = `이곳의 이름은 ${chosenImages.nameOfplace}입니다.`;