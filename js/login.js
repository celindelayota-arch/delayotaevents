document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("offcanvasLoginForm");

  if (!form) {
    console.error("Form login tidak ditemukan!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("member-login-number").value.trim();
    const password = document.getElementById("member-login-password").value.trim();

    if (!email || !password) {
      alert("Isi email dan password!");
      return;
    }

    localStorage.setItem("user", email);

    alert("Login berhasil!");

    // sesuaikan path ini
    window.location.href = "../index.html";
  });

});
