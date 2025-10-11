<template>
  <div id="app">
    <header class="app-header">
      <nav class="container">
        <div class="logo">C9 SCIENTIFIC</div>
      </nav>
    </header>

    <main>
      <HeroSection />
      <ProofSection />
      <ShowcaseSection />
      <ContactSection />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 C9 SCIENTIFIC Team. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import ProofSection from './components/ProofSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
.app-header {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(5px);
}
.app-header nav {
  height: 70px;
  display: flex;
  align-items: center;
}
.logo {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
}
.app-footer {
  background-color: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 1.5rem 0;
}
</style>