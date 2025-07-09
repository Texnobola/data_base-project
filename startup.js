const button = document.getElementById("submit");
const body = document.getElementById('body');
const usersInfoButton = document.getElementById('users_info');
const name1 = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const email = document.getElementById("emailInput");
const phone = document.getElementById("phoneInput");
const city = document.getElementById("cityInput");
const about = document.getElementById("aboutInput");
const image = document.getElementById("imageInput");
const warning = document.getElementById("warning");



fetch("http://localhost:3000/users").then(res => res.json()).then(data =>{
    for (let i = 0; i < data.length; i++) {
        if (email.value = data[i].email) {
            warning.classList.add("active");
            warning.innerHTML = "Siz kiritgan email allaqachon bizning servisda ro'yxatdan o'tgan,iltimos boshqa email bilan ro'yxatdan o'ting"
        }else if (phone.value = data[i].phone) {
            warning.classList.add("active");
            warning.innerHTML = "Siz kiritgan telefon raqami allaqachon ro'yxatdan o'tgan, iltimos boshqa raqam bilan ro'yxatdan o'ting"
        }else if(true){

        }
    }
})

usersInfoButton.addEventListener("click", submitgate);
function submitgate() {
    window.location.href = "users.html";
}

button.addEventListener("click", saveusers)

function saveusers() {
    let userssaver = {
        name: name1.value,
        password: password.value,
        email: email.value,
        phone: phone.value,
        city: city.value,
        about: about.value,
        image: image.value
    }
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(userssaver)
    });
}