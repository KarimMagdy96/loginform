// let loginUser = document.getElementById("loginUser");
// let loginMail = document.getElementById("loginMail");
// let loginPass = document.getElementById("loginPass");
// let valiedUserMail=document.getElementById('valiedUserMail');
// let valiedUserPassword=document.getElementById('valiedUserPassword');
// let userInfo = [];
// let loginbtn = document.getElementById("login");
// let welcomepage = document.querySelector(".welcome");
// let card = document.querySelector(".card");
// let signUp = document.getElementById("signUP");
// let signupPage = document.getElementById("signupPage");
// let signinPage = document.getElementById("signinPage");
// let registration = document.querySelector(".registration");

// //REGESTRATION FORM .
// if(signUp !=null){
//   signUp.addEventListener("click", addUserData);
//   function addUserData() {
//     let user = {
//       name: loginUser.value,
//       password: loginPass.value,
//       email: loginMail.value,
//     };
//     userInfo.push(user);
//     localStorage.setItem("userbio", JSON.stringify(userInfo));

//     // card.innerHTML=`welcome ${user.name}`;

//     // console.log(`welcome ${user.name}`);
//   }

// }

// //VALIDATE USER

// loginbtn.addEventListener("click", validateuser);

// function validateuser() {
//   userInfo = JSON.parse(localStorage.getItem("userbio"));
//   // welcomepage.classList.replace("d-none", "d-flex");
//   for (let i = 0; i < userInfo.length; i++) {
//     if (
//       userInfo[i].email == valiedUserMail.value &&
//       userInfo[i].password == valiedUserPassword.value
//     ) {
//       card.innerHTML = `welcome ${userInfo[i].name}`;
//     } else {
//       card.innerHTML = `Sorry ${userInfo[i].name}`;
//     }
//   }
// }

// // signupPage.addEventListener("click", function () {
// //   registration.classList.replace("d-none", "d-flex");
// // });
// // signinPage.addEventListener("click", function () {
// //   registration.classList.replace("d-flex", "d-none");
// // });

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
        // welcomeCard.innerHTML = `welcome ${userinfo[i].name}`;
      
        logInBtn.setAttribute("href","../welcomeuser.html")
        function test(){
          alert()
        }
        console.log("welcome");
      } else {
        // welcomeCard.innerHTML = `Sorry ${userinfo[i].name}`;
        console.log("sorry");
      }
    }
  }
}
