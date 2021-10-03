//위치 찾기
const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");
//sting 변수화
const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username";

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText =`안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASS);
}

//스토리지
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
//form 보여주기
loginForm.classList.remove(HIDDEN_CLASS);
loginForm.addEventListener("submit", onSubmit);
} else {
//onSubmit 하기
paintGreetings();
}