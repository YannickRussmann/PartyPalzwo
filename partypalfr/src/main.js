document.querySelector('.start-btn').addEventListener('click', function() {
  confetti();
  alert('Viel Spaß beim Abend!');
});

// Overlay-Login öffnen/schließen
document.getElementById('open-login').addEventListener('click', function() {
  document.getElementById('login-overlay').style.display = 'flex';
});
document.getElementById('close-login').addEventListener('click', function() {
  document.getElementById('login-overlay').style.display = 'none';
});

// Login-Formular abfangen
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.username.value;
  const password = this.password.value;
  if (username === "party" && password === "1234") {
    alert("Login erfolgreich! 🎉");
    document.getElementById('login-overlay').style.display = 'none';
  } else {
    alert("Falscher Benutzername oder Passwort!");
  }
});

