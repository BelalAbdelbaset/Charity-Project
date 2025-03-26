<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section py-5 bg-light">
      <div class="container text-center">
        <h1 class="display-4 mb-4">مشاريعنا الخيرية</h1>
        <p class="lead">نعمل على تنفيذ مشاريع متنوعة لتحسين حياة المحتاجين</p>
      </div>
    </section>

    <!-- Projects Filter -->
    <section class="filter-section py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <button v-for="category in categories" :key="category.id" class="btn"
                :class="selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'"
                @click="selectedCategory = category.id">
                {{ category.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in filteredProjects" :key="project.id">
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
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted">المبلغ المطلوب: {{ project.target }} دينار</span>
                  <router-link :to="'/projects/' + project.id" class="btn btn-primary">
                    المزيد من التفاصيل
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Completed Projects -->
    <section class="completed-projects py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">المشاريع المكتملة</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in completedProjects" :key="project.id">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-success">
                    <i class="fas fa-check-circle me-2"></i>
                    مكتمل
                  </span>
                  <span class="text-muted">تم جمع: {{ project.raised }} دينار</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', name: 'جميع المشاريع' },
  { id: 'education', name: 'التعليم' },
  { id: 'health', name: 'الصحة' },
  { id: 'food', name: 'إطعام' },
  { id: 'housing', name: 'السكن' },
  { id: 'emergency', name: 'الطوارئ' }
]

const selectedCategory = ref('all')

const projects = [
  {
    id: 1,
    title: 'مشروع إطعام المحتاجين',
    description: 'تقديم وجبات غذائية للأسر المحتاجة في المناطق النائية',
    image: 'src/assets/Images/HomePage1.jpg',
    category: 'food',
    progress: 75,
    target: 50000,
    raised: 37500
  },
  {
    id: 2,
    title: 'مشروع المنح الدراسية',
    description: 'توفير المنح الدراسية للطلاب المتفوقين من الأسر المحتاجة',
    image: 'src/assets/Images/HomePage2.jpg',
    category: 'education',
    progress: 60,
    target: 100000,
    raised: 60000
  },
  {
    id: 3,
    title: 'مشروع الرعاية الصحية',
    description: 'تقديم الرعاية الصحية الأساسية للمحتاجين',
    image: 'src/assets/Images/HomePage3.jpg',
    category: 'health',
    progress: 45,
    target: 75000,
    raised: 33750
  },
  {
    id: 4,
    title: 'مشروع المساكن',
    description: 'بناء مساكن للأسر المحتاجة',
    image: 'src/assets/Images/HomePage2.jpg',
    category: 'housing',
    progress: 30,
    target: 150000,
    raised: 45000
  }
]

const completedProjects = [
  {
    id: 5,
    title: 'مشروع الكساء الشتوي',
    description: 'توزيع ملابس شتوية للأسر المحتاجة',
    image: 'src/assets/Images/HomePage2.jpg',
    category: 'emergency',
    raised: 25000
  },
  {
    id: 6,
    title: 'مشروع المكتبات المدرسية',
    description: 'تجهيز مكتبات في المدارس الحكومية',
    image: 'src/assets/Images/HomePage3.jpg',
    category: 'education',
    raised: 40000
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<style scoped>
.projects-page {
  direction: rtl;
}

.hero-section {
  background-color: #f8f9fa;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.progress {
  height: 1.5rem;
}

.progress-bar {
  background-color: #3498db;
}

.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

.text-success {
  color: #27ae60 !important;
}
</style>
