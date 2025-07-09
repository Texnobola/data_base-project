const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container1 = document.getElementById("dad");
const bodyR = document.getElementById("bodyR");

fetch("http://localhost:3000/users/" + id)
    .then(res => res.json()).then(data => {
        const users = document.createElement("div");
        users.classList.add("usersdad");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        image.src = data.image;
        image.alt = "User Image";
        name.innerText = data.name;
        const email = document.createElement("p");
        email.innerText = data.email;
        const password = document.createElement("p");
        password.innerText = data.password;
        const phone = document.createElement("p");
        phone.innerText = data.phone;
        const city = document.createElement("p");
        city.innerText = data.city;
        const about = document.createElement("p");
        about.innerText = data.about;

        users.appendChild(name);
        users.appendChild(email);
        users.appendChild(password);
        users.appendChild(phone);
        users.appendChild(city);
        users.appendChild(about);
        users.appendChild(image);

        container1.appendChild(users);

        image.style.width = "100px";
        image.style.height = "100px";
        image.style.borderRadius = "50%";
        image.style.objectFit = "cover";
        name.style.color = "#333";
        email.style.color = "#555";
        password.style.color = "#555";
        phone.style.color = "#555";
        city.style.color = "#555";
        about.style.color = "#555";
        name.style.fontSize = "18px";
        email.style.fontSize = "14px";
        password.style.fontSize = "14px";
        phone.style.fontSize = "14px";
        city.style.fontSize = "14px";
        about.style.fontSize = "14px";
        name.style.fontWeight = "bold";
        email.style.fontWeight = "normal";
        password.style.fontWeight = "normal";
        phone.style.fontWeight = "normal";
        city.style.fontWeight = "normal";
        about.style.fontWeight = "normal";
        container1.style.display = "flex";
        container1.style.flexWrap = "wrap";
        container1.style.justifyContent = "center";
        container1.style.padding = "20px";
        users.style.textAlign = "center";
        users.style.margin = "10px";
        users.style.border = "1px solid #ccc";
        users.style.padding = "10px";
        users.style.borderRadius = "8px";
        users.style.backgroundColor = "#f9f9f9";
        users.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        users.style.width = "100%";
        users.style.height = "800px";
        users.style.display = "flex";
        users.style.flexDirection = "column";
        users.style.alignItems = "center";
        users.style.justifyContent = "center";
        users.style.gap = "10px";
        users.style.fontFamily = "Arial, sans-serif";
        users.style.color = "#333";
        users.style.backgroundColor = "#fff";
        users.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        users.style.transition = "transform 0.2s";
        users.addEventListener("mouseover", () => {
            users.style.transform = "scale(1.05)";
        });
        users.addEventListener("mouseout", () => {
            users.style.transform = "scale(1)";
        });
        bodyR.appendChild(users);
    })