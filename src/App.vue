<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'passenger-list' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
