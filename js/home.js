var wel=document.querySelector('#username');
var userData= JSON.parse(localStorage.getItem('user'));
var logout= document.querySelector('#logout');
logout.addEventListener('click', logOut )

if(localStorage.getItem('user')==null){
    window.location.href='index.html'
}

wel.innerHTML=`welcome ${userData}`;



function logOut(){
    localStorage.removeItem('user');
window.location.href='index.html'
}