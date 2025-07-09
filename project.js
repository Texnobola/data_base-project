const container = document.getElementById("wrapper");

fetch("http://localhost:3000/users").then(res => res.json()).then(data => {
    for (let i = 0; i < data.length; i++) {
        const users = document.createElement("div");
        users.classList.add("users");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        image.src = data[i].image;
        image.alt = "User Image";
        name.src = data[i].name;
        name.innerText = data[i].name;
        const email = document.createElement("p");
        email.src = data[i].email;
        email.innerText = data[i].email;
        const password = document.createElement("p");
        password.src = data[i].password;
        password.innerText = data[i].password;
        const phone = document.createElement("p");
        phone.src = data[i].phone;
        phone.innerText = data[i].phone;
        const city = document.createElement("p");
        city.src = data[i].city;
        city.innerText = data[i].city;
        const about = document.createElement("p");
        about.src = data[i].about;
        about.innerText = data[i].about;
        users.appendChild(name);
        users.appendChild(email);
        users.appendChild(phone);
        users.appendChild(city);
        users.appendChild(about);
        users.appendChild(image);
        container.appendChild(users);
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
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.justifyContent = "center";
        container.style.padding = "20px";
        container.style.backgroundColor = "#f9f9f9";
        users.style.border = "1px solid #ddd";
        users.style.borderRadius = "8px";
        users.style.padding = "10px";
        users.style.margin = "10px";
        users.style.width = "200px";
        users.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        users.style.backgroundColor = "#fff";
        users.style.textAlign = "center";
        users.style.transition = "transform 0.2s";
        users.addEventListener("mouseover", () => {
            users.style.transform = "scale(1.05)";
        });
        users.addEventListener("mouseout", () => {
            users.style.transform = "scale(1)";
        });
        users.addEventListener("click", () => {
            window.location.href = "info.html?id=" + data[i].id;
        });
        const moreButton = document.createElement("button");
        moreButton.innerText = "Batafsil";
        moreButton.classList.add("more");
        moreButton.addEventListener("click", () => {
            window.location.href = "info.html?id=" + data[i].id;
        });
        users.appendChild(moreButton);
        moreButton.style.marginTop = "10px";
        moreButton.style.padding = "8px 12px";
        moreButton.style.backgroundColor = "#007bff";
        moreButton.style.color = "#fff";
        moreButton.style.border = "none";
        moreButton.style.borderRadius = "4px";
        moreButton.style.cursor = "pointer";
        moreButton.style.transition = "background-color 0.3s";
        moreButton.addEventListener("mouseover", () => {
            moreButton.style.backgroundColor = "#0056b3";
        });
        moreButton.addEventListener("mouseout", () => {
            moreButton.style.backgroundColor = "#007bff";
        });

    }
});