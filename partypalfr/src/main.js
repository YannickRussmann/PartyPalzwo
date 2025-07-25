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
    showWelcomePage(username);
    document.getElementById('login-overlay').style.display = 'none';
  } else {
    alert("Falscher Benutzername oder Passwort!");
  }
});

function showWelcomePage(username) {
  document.body.innerHTML = `
    <div id="disco-bg"></div>
    <div id="welcome-app">
      <header class="header">
        <button class="profile-btn" id="profile-btn">👤 Profil</button>
      </header>
      <main class="welcome-main">
        <h1 class="welcome-title">Willkommen${username ? ', ' + username : ''}!</h1>
        <div class="welcome-buttons">
          <button class="feature-btn">🎵 Playlist</button>
          <button class="feature-btn">🍹 Rezepte</button>
          <button class="feature-btn">🗳️ Abstimmung</button>
          <button class="feature-btn">📅 Event-Plan</button>
        </div>
      </main>
    </div>
  `;
  // Optional: Discolichter neu erzeugen, falls du sie nutzt
  if (typeof createDiscoLights === "function") createDiscoLights();
}

window.createDiscoLights = function() {
  const colors = [
    'rgba(0,242,254,0.7)',   // Türkis
    'rgba(76,91,213,0.7)',   // Blau
    'rgba(188,111,241,0.7)', // Lila
    'rgba(255,97,166,0.7)',  // Neonpink
    'rgba(255,255,255,0.3)'  // Weiß für Glow
  ];
  const discoBg = document.getElementById('disco-bg');
  if (!discoBg) return;
  discoBg.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const light = document.createElement('div');
    light.className = 'disco-light';
    const size = 120 + Math.random() * 180;
    light.style.width = size + 'px';
    light.style.height = size + 'px';
    light.style.left = Math.random() * 90 + 'vw';
    light.style.top = Math.random() * 70 + 'vh';
    light.style.background = colors[Math.floor(Math.random() * colors.length)];
    light.style.animationDuration = (6 + Math.random() * 6) + 's';
    discoBg.appendChild(light);
  }
};

