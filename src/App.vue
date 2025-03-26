<script setup>
import { provideTheme } from './composables/useTheme'
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'

provideTheme()
</script>

<template>
  <MainNavbar />
  <RouterView />
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px 0;
}

.navbar {
  padding: 1rem 0;
  background-color: #2c3e50 !important;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff !important;
}

.nav-link {
  font-size: 1.1rem;
  padding: 0.5rem 1rem !important;
  color: #ffffff !important;
}

.nav-link:hover {
  color: #3498db !important;
}

.nav-link.active {
  color: #3498db !important;
  font-weight: 500;
}

.footer {
  margin-top: auto;
  border-top: 1px solid #dee2e6;
  background-color: #2c3e50 !important;
  color: #ffffff !important;
}

.footer .text-muted {
  color: #ffffff !important;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* RTL Support */
[dir="rtl"] .navbar-nav {
  padding-right: 0;
}

[dir="rtl"] .nav-link {
  padding: 0.5rem 1rem !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}

:root {
  --bg-color: #f8f9fa;
  --text-color: #212529;
  --card-bg: #ffffff;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --overlay-gradient: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  --primary-color: #3498db;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f8f9fa;
  --card-bg: #2d2d2d;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --overlay-gradient: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  padding-top: 76px;
}
</style>
