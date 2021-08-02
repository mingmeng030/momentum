const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//위와 동일 : loginForm.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    // greeting.innerText="Hello "+username+":)!";
    greeting.innerText=`Hello ${username} :)!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){ //저장된 username이 없는 경우 : show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{ //저장된 username이 있는 경우 : show greetings
    paintGreetings(savedUsername);
} 
    


/* 
<onLoginSubmmit 함수 호출 시 브라우저가 하는 일>
브라우저는 함수를 실행시키고 있기는 하지만 
브라우저 내에서 event로 부터 정보를 잡아
우리에게 중요할 지도 모르는 정보를 가진 채로 
onLoginSubmmit 함수 실행 버튼을 누르고 있다

onLoginSubmmit(info) 

브라우저의 기본 동작을 막기 위해 공간(event)을 주고 
preventDefault 함수를 사용한다.
*/