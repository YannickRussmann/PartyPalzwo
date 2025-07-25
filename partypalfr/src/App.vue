<template>
  <div id="app">
    <header class="header">
      <button class="login-btn">Login</button>
    </header>
    <main class="main-content">
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <HelloWorld msg="Welcome at PartyPal"/>
      <button class="start-btn">Beginne den Abend</button>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 40px 0 0;
}

.login-btn {
  background: #fff;
  color: #ff5f6d;
  border: none;
  border-radius: 25px;
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(255,95,109,0.15);
  transition: background 0.2s, color 0.2s;
}
.login-btn:hover {
  background: #ff5f6d;
  color: #fff;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.logo {
  width: 120px;
  margin-bottom: 30px;
  filter: drop-shadow(0 4px 16px rgba(255,95,109,0.2));
}

.start-btn {
  margin-top: 40px;
  background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 18px 48px;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255,94,98,0.18);
  transition: background 0.2s, transform 0.2s;
}
.start-btn:hover {
  background: linear-gradient(90deg, #ff5e62 0%, #ff9966 100%);
  transform: scale(1.05);
}
</style>
