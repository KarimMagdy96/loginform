//registration inputs
let loginUser = document.getElementById("loginUser");
let loginMail = document.getElementById("loginMail");
let loginPass = document.getElementById("loginPass");
let SignUpBtn = document.getElementById("SignUpBtn");

//validate inputs (login page)
let valiedUserMail = document.getElementById("valiedUserMail");
let valiedUserPassword = document.getElementById("valiedUserPassword");
let logInBtn = document.getElementById("logInBtn");

//welcome page

let welcomeCard = document.getElementById("welcomeCard");

//Take User Data and Save It in Local Storage (for Registration form).

let userinfo = [];
if (SignUpBtn != null) {
  SignUpBtn.addEventListener("click", addUserData);
  function addUserData() {
    let user = {
      name: loginUser.value,
      password: loginPass.value,
      email: loginMail.value,
    };
    //misisng if local storage not null add donot replace
    userinfo.push(user);
    localStorage.setItem("userbio", JSON.stringify(userinfo));
  }
}

//validate data from user for(login page)

if (logInBtn != null) {
  logInBtn.addEventListener("click", validateuser);
  function validateuser() {
    userinfo = JSON.parse(localStorage.getItem("userbio"));
    for (let i = 0; i < userinfo.length; i++) {
      if (
        userinfo[i].email == valiedUserMail.value &&
        userinfo[i].password == valiedUserPassword.value
       
      ) {
        
        console.log("welcome");
       let vuser= userinfo[i].name
        localStorage.setItem('vuser',vuser)
        logInBtn.setAttribute("href", "welcomeuser.html");
        document.getElementById('msg').classList.replace('d-block','d-none');
      } else {
        document.getElementById('msg').classList.replace('d-none','d-block');
      }
    }
  }
}

function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = `welcome ${localStorage.vuser}`;

}

valiedUserMail.addEventListener('input',removednone)
function removednone(){
  document.getElementById('msg').classList.replace('d-block','d-none');
}