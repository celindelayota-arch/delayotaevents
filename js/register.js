console.log("register loaded");

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    username,
    email,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("message").innerText = "Register berhasil!";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});
