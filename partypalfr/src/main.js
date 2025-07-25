document.querySelector('.start-btn').addEventListener('click', function() {
  // Startseiten-Inhalte entfernen
  document.querySelector('.main-content').innerHTML = '';
  document.getElementById('login-overlay').style.display = 'flex';

  // Event-Listener für Login-Formular und Close-Button jetzt neu binden!
  document.getElementById('close-login').onclick = function() {
    document.getElementById('login-overlay').style.display = 'none';
  };
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    if (username && password) {
      showPartyApp(username);
      document.getElementById('login-overlay').style.display = 'none';
    } else {
      alert("Falscher Benutzername oder Passwort!");
    }
  };
});

// Die Party-App nach Login
function showPartyApp(username) {
  document.body.innerHTML = `
    <div id="disco-bg"></div>
    <div id="party-app">
      <nav class="party-banner">
        <button class="banner-btn friends-btn" id="friends-btn">👥 Freunde</button>
        <button class="banner-btn ranking-btn" id="ranking-btn">👑 Ranking</button>
        <button class="banner-btn uber-btn" id="uber-btn">🚗 Uber rufen</button>
        <button class="banner-btn games-btn" id="games-btn">🎲 Partyspiele</button>
        <button class="banner-btn badges-btn" id="badges-btn">🏅 Abzeichen</button>
        <button class="banner-btn profile-btn" id="profile-btn">👤 Profil</button>
      </nav>
      <div class="welcome-banner">
        <h1 class="welcome-title">
          Willkommen, <span id="user-name">${username}</span>!
          <span class="icon">🎉</span><span class="icon">🍾</span><span class="icon">🥳</span>
        </h1>
      </div>
      <main class="party-main">
        <section class="profile-section" id="profile-section">
          <h2>Dein Profil</h2>
          <input type="text" id="drink-input" placeholder="Neuen Drink eintragen">
          <button id="add-drink-btn">Drink hinzufügen</button>
          <ul id="drink-list"></ul>
          <button id="measure-btn">Alkohol messen & Foto machen 📷</button>
          <div id="alcohol-status"></div>
          <div id="photo-preview"></div>
        </section>
        <section class="party-feed" id="party-feed">
          <h2>Party-Feed</h2>
          <div id="feed-list"></div>
        </section>
        <section class="party-games" id="party-games">
          <h2>Partyspiele</h2>
          <button class="game-btn">🍻 Trinkroulette</button>
          <button class="game-btn">🎲 Würfeln</button>
          <button class="game-btn">🃏 Karten ziehen</button>
        </section>
        <section class="badges-section" id="badges-section">
          <h2>Abzeichen</h2>
          <div id="badges-list"></div>
        </section>
      </main>
    </div>
  `;
  if (typeof createDiscoLights === "function") createDiscoLights();

  // Drinks hinzufügen
  const drinkList = [];
  document.getElementById('add-drink-btn').onclick = function() {
    const val = document.getElementById('drink-input').value.trim();
    if (val) {
      drinkList.push(val);
      updateDrinkList();
      document.getElementById('drink-input').value = '';
    }
  };
  function updateDrinkList() {
    document.getElementById('drink-list').innerHTML = drinkList.map(d => `<li>${d}</li>`).join('');
  }

  // Alkohol messen & Foto machen (Demo)
  document.getElementById('measure-btn').onclick = function() {
    const promille = (Math.random() * 2).toFixed(2);
    document.getElementById('alcohol-status').innerText = `Dein Alkoholspiegel: ${promille}‰`;
    if (promille > 1.2) {
      alert('Trink jetzt ein Glas Wasser!');
    }
    // Foto machen (Demo: Platzhalterbild)
    document.getElementById('photo-preview').innerHTML = `<img src="https://placekitten.com/120/120" alt="Dein Partyfoto">`;
    // Feed-Eintrag
    addFeed(`${username} hat einen Alkoholspiegel von ${promille}‰ gemessen und ein Foto gemacht!`);
    // Abzeichen
    if (promille > 1.5) addBadge('Party-Löwe 🦁');
    if (promille > 2.0) addBadge('König der Nacht 👑');
  };

  // Feed
  function addFeed(msg) {
    const el = document.createElement('div');
    el.textContent = msg;
    document.getElementById('feed-list').prepend(el);
  }

  // Abzeichen
  function addBadge(name) {
    const badges = document.getElementById('badges-list');
    if (![...badges.children].some(b => b.textContent === name)) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = name;
      badges.appendChild(badge);
    }
  }

  // Uber-Knopf (Demo)
  document.getElementById('uber-btn').onclick = function() {
    window.open('https://m.uber.com/', '_blank');
  };

  // Freunde (Demo)
  document.getElementById('friends-btn').onclick = function() {
    alert('Freunde-Feature: Hier kannst du bald Freunde adden und ihren Status sehen!');
  };

  // Ranking (Demo)
  document.getElementById('ranking-btn').onclick = function() {
    alert('Ranking-Feature: Hier siehst du bald, wer der Party-König ist!');
  };

  // Profil (Demo)
  document.getElementById('profile-btn').onclick = function() {
    alert('Profil-Feature: Hier kannst du bald dein Profil bearbeiten!');
  };
}

// Discolichter (wie gehabt)
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


