document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Isi email dan password!");
      return;
    }

    localStorage.setItem("user", email);

    alert("Login berhasil!");

    window.location.href = window.location.origin;
  });

});
