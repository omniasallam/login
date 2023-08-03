//sign up
var signupName = document.querySelector("#upname");
var signupEmail = document.querySelector("#upemail");
var signupPssword = document.querySelector("#uppassword");
var error = document.querySelector("#error");
var emailExists = document.querySelector("#emailExists");
var success = document.querySelector("#success");
var userDetails = [];

var signUp = document.querySelector("#signup");
signUp.addEventListener("click", function () {
  dataUp();
  // console.log(userDetails);
});

if (localStorage.getItem("info") != null) {
  userDetails = JSON.parse(localStorage.getItem("info"));
}

function dataUp() {
  if (validation()) {
    var user = {
      nameUp: signupName.value,
      emailUp: signupEmail.value,
      passwordUp: signupPssword.value,
    };
    userDetails.push(user);
    localStorage.setItem("info", JSON.stringify(userDetails));
    console.log(userDetails);
  }
  emptyData();
  //  clear();
}

function emptyData() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPssword.value == ""
  ) {
    error.classList.replace("d-none", "d-block");
    return false;
  } else {
    error.classList.replace("d-block", "d-none");
    return true;
  }
}

/* function validateEmail() {
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(signupEmail);
} */

function validation() {
  var regex = /^([a-zA-Z0-9@.!#$%^&* ]+)$/;
  if (
    regex.test(signupName.value) &&
    regex.test(signupEmail.value) &&
    regex.test(signupPssword.value)
  ) {

    if (userDetails.length > 0) {
      var emailFound = false;

      for (var i = 0; i < userDetails.length; i++) {
        //  if(userDetails[i].nameUp ===signupName.value){
        //  console.log('user is exit');
        //  }
        if (userDetails[i].emailUp === signupEmail.value) {
          emailExists.classList.replace("d-none", "d-block");
          success.classList.replace("d-block", "d-none");
           emailFound = true;
           break;
        } else {
          success.classList.replace("d-none", "d-block");
          emailExists.classList.replace("d-block", "d-none");
          emailFound = false;
          console.log(userDetails[i].emailUp, signupEmail.value);
        }
      }
      if (emailFound) return false;
      if (!emailFound) return true;
    } else {
      success.classList.replace("d-none", "d-block");
      emailExists.classList.replace("d-block", "d-none");
      return true;
    }
  } else {
    return false;
  }

  /* if (
    regex.test(signupName.value) &&
    regex.test(signupEmail.value) &&
    regex.test(signupPssword.value)
  ) {
    // error.classList.replace("d-none", "d-block")
    success.classList.replace("d-none", "d-block");
    console.log(signupName.value, signupEmail.value);
  }
  for (var i = 0; i < userDetails.length; i++) {
    //  if(userDetails[i].nameUp ===signupName.value){
    //  console.log('user is exit');
    //  }

    if (userDetails[i].emailUp === signupEmail.value) {
      emailExists.classList.replace("d-none", "d-block");
      console.log("email is exit");
      break;
    } else {
      return false;
    }
  } */
}

// end sign up //

// window.location.href = "";

//if(signinEmail.value==signupEmail.value){
//  console.log('hello');

//}
//else{
//console.log('no');
//}
