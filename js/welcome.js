document.addEventListener("DOMContentLoaded", function () {
  renderAuth();
});

function renderAuth() {
  const user = localStorage.getItem("user");
  const authArea = document.getElementById("authArea");
  const userInfo = document.getElementById("userInfo");

  if (!authArea) return;

  if (user) {
    if (userInfo) {
      userInfo.textContent = `Login sebagai: ${user}`;
    }

    authArea.innerHTML = `
      <a id="logoutBtn" href="#" class="btn custom-btn custom-border-btn">
        Logout
      </a>
    `;

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("user");
        renderAuth();
      });
    }

  } else {
    if (userInfo) {
      userInfo.textContent = "Belum login";
    }

    authArea.innerHTML = `
      <a onclick="goLogin()" class="btn custom-btn custom-border-btn">
        Login
      </a>
    `;
  }
}

function goLogin() {
  const form = document.getElementById("loginForm");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
}
