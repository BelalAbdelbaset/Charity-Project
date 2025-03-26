<script setup>
import '../assets/styles/HomeView.css'
import { ref, onMounted, onUnmounted } from 'vue'
import { heroContent, impactStats, featuredProjects, ctaContent } from '../data/homeData'

const currentSlide = ref(0)
const carouselInterval = ref(null)
const isTransitioning = ref(false)

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % heroContent.carousel.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value - 1 + heroContent.carousel.length) % heroContent.carousel.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

const goToSlide = (index) => {
  if (isTransitioning.value || currentSlide.value === index) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

const startCarousel = () => {
  if (carouselInterval.value) return
  carouselInterval.value = setInterval(nextSlide, 5000)
}

const stopCarousel = () => {
  if (carouselInterval.value) {
    clearInterval(carouselInterval.value)
    carouselInterval.value = null
  }
}

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR'
  }).format(amount)
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">{{ heroContent.title }}</h1>
            <p class="lead mb-4">{{ heroContent.description }}</p>
            <div class="d-flex gap-3">
              <router-link v-for="button in heroContent.buttons" :key="button.text" :to="button.path"
                :class="['btn', `btn-${button.variant}`, 'btn-lg']">
                {{ button.text }}
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="carousel-container" @mouseenter="stopCarousel" @mouseleave="startCarousel">
              <div class="carousel-inner">
                <div v-for="(slide, index) in heroContent.carousel" :key="index"
                  :class="['carousel-item', { active: currentSlide === index }]"
                  :style="{ transform: `translateX(${(index - currentSlide) * 100}%)` }">
                  <img :src="slide.image" :alt="slide.alt" class="carousel-image">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" @click="prevSlide">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" @click="nextSlide">
                <span class="carousel-control-next-icon"></span>
              </button>
              <div class="carousel-indicators">
                <button v-for="(_, index) in heroContent.carousel" :key="index" type="button"
                  :class="{ active: currentSlide === index }" @click="goToSlide(index)"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">تأثيرنا في المجتمع</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="stat in impactStats" :key="stat.icon">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i :class="['fas', `fa-${stat.icon}`, 'fa-3x', 'text-primary', 'mb-3']"></i>
                <h3 class="card-title">{{ stat.count }}</h3>
                <p class="card-text">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">مشاريعنا الحالية</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="project in featuredProjects" :key="project.id">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div class="progress mb-3">
                  <div class="progress-bar" role="progressbar" :style="{ width: project.progress + '%' }"
                    :aria-valuenow="project.progress" aria-valuemin="0" aria-valuemax="100">
                    {{ project.progress }}%
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <small class="text-muted">تم جمع: {{ formatCurrency(project.raised) }}</small>
                  <small class="text-muted">الهدف: {{ formatCurrency(project.target) }}</small>
                </div>
                <router-link :to="'/projects/' + project.id" class="btn btn-primary w-100">المزيد من
                  التفاصيل</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <h2 class="mb-4">{{ ctaContent.title }}</h2>
        <p class="lead mb-4">{{ ctaContent.description }}</p>
        <router-link :to="ctaContent.button.path" class="btn btn-primary btn-lg">
          {{ ctaContent.button.text }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
}

.min-vh-75 {
  min-height: 75vh;
}

.impact-section .card {
  transition: transform 0.3s ease;
}

.impact-section .card:hover {
  transform: translateY(-5px);
}

.projects-section .card {
  transition: transform 0.3s ease;
}

.projects-section .card:hover {
  transform: translateY(-5px);
}

.cta-section {
  background-color: #2c3e50;
  color: white;
}

.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

.progress {
  height: 1.5rem;
}

.progress-bar {
  background-color: #3498db;
}
</style>
