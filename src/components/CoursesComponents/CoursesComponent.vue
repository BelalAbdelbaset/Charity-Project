<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample course data - replace with your actual data source
const courses = ref([
  {
    id: 1,
    title: 'مقدمة في البرمجة',
    description: 'تعلم أساسيات البرمجة من الصفر',
    image: 'https://picsum.photos/400/300',
    category: 'برمجة',
    price: 0,
    instructor: 'أحمد محمد',
    rating: 4.5,
    students: 1200
  },
  {
    id: 2,
    title: 'تصميم المواقع الإلكترونية',
    description: 'تعلم HTML, CSS, و JavaScript',
    image: 'https://picsum.photos/400/301',
    category: 'تصميم',
    price: 199,
    instructor: 'سارة أحمد',
    rating: 4.8,
    students: 850
  },
  {
    id: 3,
    title: 'تحليل البيانات',
    description: 'تعلم تحليل البيانات باستخدام Python',
    image: 'https://picsum.photos/400/302',
    category: 'تحليل البيانات',
    price: 299,
    instructor: 'محمد علي',
    rating: 4.6,
    students: 650
  }
]);

// State management
const searchQuery = ref('');
const selectedCategory = ref('all');
const priceRange = ref('all');
const sortBy = ref('newest');

// Get unique categories
const categories = computed(() => {
  const uniqueCategories = new Set(courses.value.map(course => course.category));
  return ['all', ...uniqueCategories];
});

// Filtered and sorted courses
const filteredCourses = computed(() => {
  let result = courses.value;

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query)
    );
  }

  // Apply category filter
  if (selectedCategory.value !== 'all') {
    result = result.filter(course => course.category === selectedCategory.value);
  }

  // Apply price filter
  if (priceRange.value !== 'all') {
    if (priceRange.value === 'free') {
      result = result.filter(course => course.price === 0);
    } else if (priceRange.value === 'paid') {
      result = result.filter(course => course.price > 0);
    }
  }

  // Apply sorting
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'students':
      result.sort((a, b) => b.students - a.students);
      break;
    default:
      // Default to newest first
      break;
  }

  return result;
});

// Format price
const formatPrice = (price) => {
  return price === 0 ? 'مجاني' : `${price} ريال`;
};

// Format number with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const navigateToCourse = (courseId) => {
  router.push(`/course/${courseId}`);
};
</script>

<template>
  <div class="container py-4">
    <!-- Header Section -->
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold mb-3">الكورسات المتاحة</h1>
      <p class="lead text-muted">اكتشف مجموعة واسعة من الكورسات التعليمية</p>
    </div>

    <!-- Filters Section -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <div class="row g-3">
          <!-- Search Bar -->
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text bg-light">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control" v-model="searchQuery" placeholder="ابحث عن كورس..." />
            </div>
          </div>

          <!-- Category Filter -->
          <div class="col-md-3">
            <select class="form-select" v-model="selectedCategory">
              <option v-for="category in categories" :key="category" :value="category">
                {{ category === 'all' ? 'جميع الفئات' : category }}
              </option>
            </select>
          </div>

          <!-- Price Range Filter -->
          <div class="col-md-3">
            <select class="form-select" v-model="priceRange">
              <option value="all">جميع الأسعار</option>
              <option value="free">مجاني</option>
              <option value="paid">مدفوع</option>
            </select>
          </div>

          <!-- Sort By -->
          <div class="col-md-2">
            <select class="form-select" v-model="sortBy">
              <option value="newest">الأحدث</option>
              <option value="price-asc">السعر: من الأقل</option>
              <option value="price-desc">السعر: من الأعلى</option>
              <option value="rating">التقييم</option>
              <option value="students">عدد الطلاب</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Courses Grid -->
    <div class="row g-4">
      <div v-for="course in filteredCourses" :key="course.id" class="col-md-4">
        <div class="card h-100 course-card">
          <img :src="course.image" class="card-img-top course-image" :alt="course.title" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-primary">{{ course.category }}</span>
              <span class="price fw-bold">{{ formatPrice(course.price) }}</span>
            </div>

            <h5 class="card-title">{{ course.title }}</h5>
            <p class="card-text flex-grow-1">{{ course.description }}</p>

            <div class="d-flex align-items-center mb-3">
              <div class="me-2">
                <i class="bi bi-star-fill text-warning"></i>
                <span class="ms-1">{{ course.rating }}</span>
              </div>
              <div>
                <i class="bi bi-people-fill text-primary"></i>
                <span class="ms-1">{{ formatNumber(course.students) }}</span>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">{{ course.instructor }}</small>
              <button class="btn btn-primary" @click="navigateToCourse(course.id)">
                التفاصيل
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredCourses.length === 0" class="text-center mt-5">
      <div class="alert alert-info">
        <i class="bi bi-info-circle me-2"></i>
        لا توجد كورسات متاحة. جرب تغيير معايير البحث
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.course-image {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image {
  transform: scale(1.05);
}

.price {
  color: #28a745;
}

.badge {
  font-size: 0.9rem;
  padding: 0.5em 1em;
}

.input-group-text {
  border-right: none;
}

.form-control:focus,
.form-select:focus {
  border-color: #ced4da;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {

  .course-card,
  .course-image,
  .btn-primary {
    transition: none;
  }
}
</style>
