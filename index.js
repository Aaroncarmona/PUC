session = localStorage.getItem("user_data")
var userData = JSON.parse(session);

var user = document.getElementById("sesion")
user.text = userData[0].correo
