const body = document.querySelector('body');
const BImg = document.getElementById("backgroundImage")

let wait = 0;

function ChekingWaitingTime(Millseconds) {
    setTimeout(function(){
        if(Millseconds === wait) {
            BImg.id = "backgroundImageWait";
        } else {
            return;
        }
    }, 6000);
}

function getTime() {
    BImg.id = "backgroundImage";
    const date = new Date();
    const Millseconds = date.getMilliseconds();
    wait = Millseconds
    ChekingWaitingTime(Millseconds);
}

body.addEventListener("mousemove", getTime);
body.addEventListener("click", getTime);
body.addEventListener("keydown", getTime)