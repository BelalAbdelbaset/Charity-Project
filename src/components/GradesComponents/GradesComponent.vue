<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Sample grades data
const grades = ref([
  {
    id: 1,
    name: 'الصف الأول',
    description: 'المرحلة الابتدائية - الصف الأول',
    image: 'https://via.placeholder.com/300x200',
    level: 'ابتدائي',
    students: 150,
    teachers: 8,
    subjects: ['القراءة', 'الكتابة', 'الرياضيات', 'العلوم'],
    schedule: '8:00 صباحاً - 2:00 مساءً',
    requirements: ['شهادة رياض الأطفال', 'عمر 6 سنوات']
  },
  {
    id: 2,
    name: 'الصف الثاني',
    description: 'المرحلة الابتدائية - الصف الثاني',
    image: 'https://via.placeholder.com/300x200',
    level: 'ابتدائي',
    students: 145,
    teachers: 8,
    subjects: ['القراءة', 'الكتابة', 'الرياضيات', 'العلوم', 'التربية الإسلامية'],
    schedule: '8:00 صباحاً - 2:00 مساءً',
    requirements: ['اجتياز الصف الأول']
  },
  {
    id: 3,
    name: 'الصف الثالث',
    description: 'المرحلة الابتدائية - الصف الثالث',
    image: 'https://via.placeholder.com/300x200',
    level: 'ابتدائي',
    students: 140,
    teachers: 8,
    subjects: ['القراءة', 'الكتابة', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'اللغة الإنجليزية'],
    schedule: '8:00 صباحاً - 2:00 مساءً',
    requirements: ['اجتياز الصف الثاني']
  },
  {
    id: 4,
    name: 'الصف الرابع',
    description: 'المرحلة المتوسطة - الصف الرابع',
    image: 'https://via.placeholder.com/300x200',
    level: 'متوسط',
    students: 130,
    teachers: 10,
    subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'اللغة الإنجليزية', 'الدراسات الاجتماعية'],
    schedule: '7:30 صباحاً - 2:30 مساءً',
    requirements: ['اجتياز الصف الثالث']
  }
])

// State management
const searchQuery = ref('')
const selectedLevel = ref('')
const sortBy = ref('name')

// Get unique levels
const levels = computed(() => {
  const uniqueLevels = new Set(grades.value.map(grade => grade.level))
  return ['', ...uniqueLevels]
})

// Filtered and sorted grades
const filteredGrades = computed(() => {
  let result = grades.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(grade =>
      grade.name.toLowerCase().includes(query) ||
      grade.description.toLowerCase().includes(query) ||
      grade.subjects.some(subject => subject.toLowerCase().includes(query))
    )
  }

  // Level filter
  if (selectedLevel.value) {
    result = result.filter(grade => grade.level === selectedLevel.value)
  }

  // Sorting
  switch (sortBy.value) {
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'students':
      result.sort((a, b) => b.students - a.students)
      break
    case 'teachers':
      result.sort((a, b) => b.teachers - a.teachers)
      break
    default:
      // Default to name
      break
  }

  return result
})

// Format number with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const navigateToGrade = (gradeId) => {
  router.push(`/grade/${gradeId}`)
}
</script>

<template>
  <div class="grades-view">
    <div class="container">
      <h1 class="text-center mb-4">الصفوف الدراسية</h1>

      <!-- Filters Section -->
      <div class="filters-section mb-4">
        <div class="row g-3">
          <!-- Search -->
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control" v-model="searchQuery" placeholder="ابحث عن صف...">
            </div>
          </div>

          <!-- Level Filter -->
          <div class="col-md-4">
            <select class="form-select" v-model="selectedLevel">
              <option value="">جميع المراحل</option>
              <option v-for="level in levels.slice(1)" :key="level" :value="level">
                {{ level }}
              </option>
            </select>
          </div>

          <!-- Sort By -->
          <div class="col-md-4">
            <select class="form-select" v-model="sortBy">
              <option value="name">الاسم</option>
              <option value="students">عدد الطلاب</option>
              <option value="teachers">عدد المدرسين</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Grades Grid -->
      <div class="row g-4">
        <div v-for="grade in filteredGrades" :key="grade.id" class="col-md-6">
          <div class="card h-100 grade-card" @click="navigateToGrade(grade.id)">
            <div class="row g-0">
              <!-- Grade Image -->
              <div class="col-md-4">
                <img :src="grade.image" :alt="grade.name" class="img-fluid h-100 object-fit-cover">
              </div>

              <!-- Grade Info -->
              <div class="col-md-8">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0">{{ grade.name }}</h5>
                    <span class="badge bg-primary">{{ grade.level }}</span>
                  </div>
                  <p class="card-text">{{ grade.description }}</p>

                  <!-- Stats -->
                  <div class="grade-stats mb-3">
                    <div class="row g-2">
                      <div class="col-6">
                        <div class="stat-item">
                          <i class="bi bi-people-fill text-primary"></i>
                          <small>{{ formatNumber(grade.students) }} طالب</small>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="stat-item">
                          <i class="bi bi-person-workspace text-success"></i>
                          <small>{{ grade.teachers }} مدرس</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Subjects -->
                  <div class="subjects-tags">
                    <span v-for="subject in grade.subjects.slice(0, 3)" :key="subject"
                      class="badge bg-light text-dark me-1 mb-1">
                      {{ subject }}
                    </span>
                    <span v-if="grade.subjects.length > 3" class="badge bg-light text-dark">
                      +{{ grade.subjects.length - 3 }}
                    </span>
                  </div>

                  <!-- Schedule -->
                  <div class="schedule mt-3">
                    <small class="text-muted">
                      <i class="bi bi-clock"></i> {{ grade.schedule }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="filteredGrades.length === 0" class="text-center mt-5">
        <p class="text-muted">لم يتم العثور على صفوف تطابق معايير البحث</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grades-view {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.grade-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.grade-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-item i {
  font-size: 1.2rem;
}

.subjects-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* RTL Support */
[dir="rtl"] .subjects-tags .badge {
  margin-right: 0.25rem;
  margin-left: 0;
}

[dir="rtl"] .stat-item {
  flex-direction: row-reverse;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grades-view {
    padding: 1rem 0;
  }

  .grade-card .col-md-4 {
    height: 200px;
  }
}
</style>
