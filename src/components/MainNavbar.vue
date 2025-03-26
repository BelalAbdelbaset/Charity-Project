<script setup>
import '../assets/styles/MainNavbar.css'

const routes = [
  { path: '/', label: 'الرئيسية' },
  { path: '/news', label: 'الأخبار' },
  { path: '/gallery', label: 'معرض الصور' },
  { path: '/projects', label: 'مشاريعنا' },
  { path: '/donate', label: 'تبرع الآن' },
  { path: '/volunteer', label: 'التطوع' },
  { path: '/about', label: 'من نحن' },
  { path: '/contact', label: 'اتصل بنا' }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">جمعية الخير</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="route in routes" :key="route.path">
            <router-link class="nav-link" :to="route.path">{{ route.label }}</router-link>
          </li>
        </ul>

        <router-link to="/donate" class="btn btn-donate">تبرع الآن</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--card-bg) !important;
  transition: background-color 0.3s ease;
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  color: var(--text-color) !important;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color) !important;
}

.nav-link.router-link-active {
  color: var(--primary-color) !important;
}

.theme-toggle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  border: none;
  box-shadow: var(--card-shadow);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-toggle i {
  font-size: 1rem;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: var(--card-bg);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
}
</style>
