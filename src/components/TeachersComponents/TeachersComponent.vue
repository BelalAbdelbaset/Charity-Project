<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Sample teachers data
const teachers = ref([
  {
    id: 1,
    name: 'أحمد محمد',
    specialization: 'برمجة',
    image: 'https://via.placeholder.com/200x200',
    rating: 4.8,
    students: 1200,
    courses: 15,
    experience: '8 سنوات',
    bio: 'مدرس متخصص في تطوير البرمجيات مع خبرة طويلة في تدريس البرمجة للمبتدئين',
    expertise: ['JavaScript', 'Python', 'Java', 'Web Development']
  },
  {
    id: 2,
    name: 'سارة أحمد',
    specialization: 'تصميم',
    image: 'https://via.placeholder.com/200x200',
    rating: 4.9,
    students: 850,
    courses: 12,
    experience: '6 سنوات',
    bio: 'مصممة جرافيك محترفة ومدرسة في مجال التصميم الرقمي',
    expertise: ['UI/UX Design', 'Adobe Photoshop', 'Figma', 'Web Design']
  },
  {
    id: 3,
    name: 'محمد علي',
    specialization: 'لغات',
    image: 'https://via.placeholder.com/200x200',
    rating: 4.7,
    students: 950,
    courses: 18,
    experience: '10 سنوات',
    bio: 'مدرس لغة إنجليزية محترف مع شهادة TESOL وخبرة في تدريس اللغات',
    expertise: ['English', 'IELTS', 'TOEFL', 'Business English']
  }
])

// State management
const searchQuery = ref('')
const selectedSpecialization = ref('')
const sortBy = ref('rating')

// Get unique specializations
const specializations = computed(() => {
  const uniqueSpecializations = new Set(teachers.value.map(teacher => teacher.specialization))
  return ['', ...uniqueSpecializations]
})

// Filtered and sorted teachers
const filteredTeachers = computed(() => {
  let result = teachers.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(teacher =>
      teacher.name.toLowerCase().includes(query) ||
      teacher.bio.toLowerCase().includes(query) ||
      teacher.expertise.some(skill => skill.toLowerCase().includes(query))
    )
  }

  // Specialization filter
  if (selectedSpecialization.value) {
    result = result.filter(teacher => teacher.specialization === selectedSpecialization.value)
  }

  // Sorting
  switch (sortBy.value) {
    case 'rating':
      result.sort((a, b) => b.rating - a.rating)
      break
    case 'students':
      result.sort((a, b) => b.students - a.students)
      break
    case 'courses':
      result.sort((a, b) => b.courses - a.courses)
      break
    case 'experience':
      result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience))
      break
    default:
      // Default to rating
      break
  }

  return result
})

// Format number with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const navigateToTeacher = (teacherId) => {
  router.push(`/teacher/${teacherId}`)
}
</script>

<template>
  <div class="teachers-view">
    <div class="container">
      <h1 class="text-center mb-4">المدرسون</h1>

      <!-- Filters Section -->
      <div class="filters-section mb-4">
        <div class="row g-3">
          <!-- Search -->
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control" v-model="searchQuery" placeholder="ابحث عن مدرس...">
            </div>
          </div>

          <!-- Specialization Filter -->
          <div class="col-md-4">
            <select class="form-select" v-model="selectedSpecialization">
              <option value="">جميع التخصصات</option>
              <option v-for="spec in specializations.slice(1)" :key="spec" :value="spec">
                {{ spec }}
              </option>
            </select>
          </div>

          <!-- Sort By -->
          <div class="col-md-4">
            <select class="form-select" v-model="sortBy">
              <option value="rating">التقييم</option>
              <option value="students">عدد الطلاب</option>
              <option value="courses">عدد الدورات</option>
              <option value="experience">الخبرة</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Teachers Grid -->
      <div class="row g-4">
        <div v-for="teacher in filteredTeachers" :key="teacher.id" class="col-md-4">
          <div class="card h-100 teacher-card" @click="navigateToTeacher(teacher.id)">
            <div class="card-body text-center">
              <!-- Teacher Image -->
              <div class="teacher-image mb-3">
                <img :src="teacher.image" :alt="teacher.name" class="rounded-circle">
              </div>

              <!-- Teacher Info -->
              <h5 class="card-title">{{ teacher.name }}</h5>
              <span class="badge bg-primary mb-2">{{ teacher.specialization }}</span>
              <p class="card-text">{{ teacher.bio }}</p>

              <!-- Stats -->
              <div class="teacher-stats mb-3">
                <div class="row g-2">
                  <div class="col-4">
                    <div class="stat-item">
                      <i class="bi bi-star-fill text-warning"></i>
                      <small>{{ teacher.rating }}</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item">
                      <i class="bi bi-people-fill text-primary"></i>
                      <small>{{ formatNumber(teacher.students) }}</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item">
                      <i class="bi bi-book-fill text-success"></i>
                      <small>{{ teacher.courses }}</small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Expertise -->
              <div class="expertise-tags">
                <span v-for="skill in teacher.expertise.slice(0, 3)" :key="skill"
                  class="badge bg-light text-dark me-1 mb-1">
                  {{ skill }}
                </span>
                <span v-if="teacher.expertise.length > 3" class="badge bg-light text-dark">
                  +{{ teacher.expertise.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="filteredTeachers.length === 0" class="text-center mt-5">
        <p class="text-muted">لم يتم العثور على مدرسين تطابق معايير البحث</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teachers-view {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.teacher-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.teacher-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-item i {
  font-size: 1.2rem;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

/* RTL Support */
[dir="rtl"] .expertise-tags .badge {
  margin-right: 0.25rem;
  margin-left: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .teachers-view {
    padding: 1rem 0;
  }

  .teacher-image img {
    width: 120px;
    height: 120px;
  }
}
</style>
