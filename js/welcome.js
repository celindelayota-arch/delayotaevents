document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("member-login-number").value;
    const password = document.getElementById("member-login-password").value;

    if (email.trim() === "" || password.trim() === "") {
      alert("Isi email dan password!");
      return;
    }

    localStorage.setItem("user", email);

    alert("Login berhasil!");

    // FIX FINAL
    window.location.href = window.location.origin;
  });

});
