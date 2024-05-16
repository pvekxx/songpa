// 로그인 기능 구현
const signData = JSON.parse(localStorage.getItem("sign_data"));


const formbtn = document.querySelector("form") as HTMLElement;
// 유저 아이디 비밀번호 
const userId = document.querySelector("#userId") as HTMLInputElement;
const userPw = document.querySelector("#userPw") as HTMLInputElement;

formbtn.onsubmit = function(e){
  e.preventDefault();
  if(userId.value === "" || userPw.value === ""){
    alert("아이디 비밀번호를 입력해주세요"); return;
  }
  let text:string = "";
  let _bool:boolean = false;
  for(let i = 0; i < signData.length; i++){
    if(userId.value === signData[i].userId && userPw.value === signData[i].userPw){
      const loginObj = {
        loginId : userId.value,
        loginPw : userPw.value
      };
      sessionStorage.setItem("loginState", JSON.stringify(loginObj));
      _bool = true;
    }
  }
  text = _bool ? "성공" : "실패";
  alert(text);

  originState();
}

// 로그인 팝업 기능 구현
const loginPopupBtn = document.querySelector(".loginBtn") as HTMLElement;
const loginPop = document.querySelector(".login-popup") as HTMLElement;
const loginDeleteBtn = document.querySelector(".login-delete") as HTMLElement;

loginPopupBtn.onclick = () => {
  loginPop.style.display = "block";
}

loginDeleteBtn.onclick = () => {
  loginPop.style.display = "none";
}

// 로그인시 logout으로 변경 및 mypage 생성
function originState(){
  const loginState = JSON.parse(sessionStorage.getItem("loginState"));

  const userArea = document.querySelector(".user-area") as HTMLElement;
  const logoutList = document.createElement("li") as HTMLElement;

  const _span01 = document.querySelector(".user-area > li:nth-child(1) > span") as HTMLElement;
  const _span02 = document.querySelector(".user-area > li:nth-child(2) > span > a") as HTMLElement;

  if( loginState !== null ){
    _span01.innerHTML = loginState.loginId+" 님";
    _span02.innerHTML = "My Page";
    // _span02.onclick = function(){
    //   document.getElementById('myPage').href = ''
    // }
    
    logoutList.innerHTML = "Log-out";
    userArea.append(logoutList);  
  }
}






// logout 클릭하면 session 버려서
// 로그인으로 변경하고 마이페이지 삭제