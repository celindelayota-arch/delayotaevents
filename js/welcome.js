document.addEventListener("DOMContentLoaded", function () {
  renderAuth();
});

function renderAuth() {
  const user = localStorage.getItem("user");
  const authArea = document.getElementById("authArea");
  const userInfo = document.getElementById("userInfo");

  if (!authArea) return;

  if (user) {
    userInfo.textContent = `Login sebagai: ${user}`;

    authArea.innerHTML = `
      <a href="#" onclick="logout()" class="btn custom-btn custom-border-btn">
        Logout
      </a>
    `;
  } else {
    userInfo.textContent = "Belum login";

    authArea.innerHTML = `
      <a onclick="goLogin()" class="btn custom-btn custom-border-btn">
        Login
      </a>
    `;
  }
}

function logout() {
  localStorage.removeItem("user");
  renderAuth();
}

function goLogin() {
  const form = document.getElementById("loginForm");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
}
