//sign in //
var signinEmail = document.querySelector("#inemail");
var signinPassword = document.querySelector("#inpassword");
var incorrect = document.querySelector("#incorrect");
var userDetails = [];

if (localStorage.getItem("info") != null) {
  userDetails = JSON.parse(localStorage.getItem("info"));
}
var login = document.querySelector("#login");
login.addEventListener("click", function () {
  addDataIn();

 // console.log(userDetails);
});

function addDataIn() {
  check();
  clear();
}

function clear() {
  signinEmail.value = "";
  signinEmail.value = "";
}

function check() {
  if (userDetails.length > 0) {
    
    for (var i = 0; i < userDetails.length; i++) {
      if (userDetails[i].emailUp === signinEmail.value) {
        localStorage.setItem('user',JSON.stringify(userDetails[i].nameUp))
        window.location.href = "home.html";
        break;
      } else {
        incorrect.classList.replace("d-none", "d-block");
      }
    }
  } else{
    incorrect.classList.replace("d-none", "d-block");
  }
}
