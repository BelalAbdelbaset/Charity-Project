<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const course = ref(null);
const loading = ref(true);
const error = ref(null);
const isInCart = ref(false);

// Sample course data (in a real app, this would come from an API)
const sampleCourses = [
  {
    id: 1,
    title: 'مقدمة في البرمجة',
    description: 'تعلم أساسيات البرمجة من الصفر',
    image: 'https://via.placeholder.com/800x400',
    category: 'برمجة',
    price: 99.99,
    instructor: 'أحمد محمد',
    rating: 4.5,
    students: 120,
    duration: '8 أسابيع',
    level: 'مبتدئ',
    prerequisites: ['لا يوجد متطلبات سابقة'],
    curriculum: [
      {
        week: 1,
        title: 'مقدمة في البرمجة',
        topics: ['ما هي البرمجة؟', 'أساسيات الحاسوب', 'أول برنامج']
      },
      {
        week: 2,
        title: 'المتغيرات والأنواع',
        topics: ['أنواع البيانات', 'المتغيرات', 'الثوابت']
      }
    ]
  },
  {
    id: 2,
    title: 'تصميم المواقع الإلكترونية',
    description: 'تعلم تصميم المواقع باستخدام HTML و CSS',
    image: 'https://via.placeholder.com/800x400',
    category: 'تصميم',
    price: 149.99,
    instructor: 'سارة أحمد',
    rating: 4.8,
    students: 85,
    duration: '10 أسابيع',
    level: 'متوسط',
    prerequisites: ['أساسيات HTML', 'مفاهيم CSS الأساسية'],
    curriculum: [
      {
        week: 1,
        title: 'مراجعة HTML',
        topics: ['عناصر HTML', 'الروابط', 'الصور']
      },
      {
        week: 2,
        title: 'CSS المتقدم',
        topics: ['Flexbox', 'Grid', 'Animations']
      }
    ]
  }
];

// Sample cart data (in a real app, this would come from a store/state management)
const cartItems = ref([
  {
    id: 1,
    title: 'مقدمة في البرمجة',
    price: 199,
    image: 'https://via.placeholder.com/150x100',
    instructor: 'أحمد محمد'
  }
])

onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    const courseId = parseInt(route.params.id);
    const foundCourse = sampleCourses.find(c => c.id === courseId);

    if (foundCourse) {
      course.value = foundCourse;
      error.value = null;
    } else {
      error.value = 'لم يتم العثور على الدورة';
    }

    loading.value = false;
  }, 500);
});

const enrollInCourse = () => {
  // TODO: Implement enrollment logic
  alert('سيتم تنفيذ عملية التسجيل قريباً');
};

const addToCart = () => {
  if (!course.value) return

  // In a real app, you would:
  // 1. Add the course to your cart store/state
  // 2. Update the UI accordingly
  // 3. Show a success message

  isInCart.value = true
  cartItems.value.push({
    id: course.value.id,
    title: course.value.title,
    price: course.value.price,
    image: course.value.image,
    instructor: course.value.instructor
  })
}

const goToCart = () => {
  router.push('/cart')
}
</script>

<template>
  <div class="course-details">
    <div class="container">
      <!-- Back Button -->
      <button class="btn btn-outline-primary mb-3" @click="router.back()">
        <i class="bi bi-arrow-right"></i> العودة للدورات
      </button>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">جاري التحميل...</span>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger text-center">
        {{ error }}
      </div>

      <!-- Course Content -->
      <div v-else-if="course" class="row">
        <!-- Main Content -->
        <div class="col-lg-8">
          <!-- Course Header -->
          <div class="course-header mb-4">
            <h1 class="course-title">{{ course.title }}</h1>
            <div class="course-meta">
              <span class="badge bg-primary me-2">{{ course.category }}</span>
              <span class="badge bg-info me-2">{{ course.level }}</span>
              <span class="badge bg-secondary">{{ course.duration }}</span>
            </div>
          </div>

          <!-- Course Image -->
          <div class="course-image mb-4">
            <img :src="course.image" :alt="course.title" class="img-fluid rounded">
          </div>

          <!-- Course Description -->
          <div class="course-description mb-4">
            <h2>وصف الدورة</h2>
            <p>{{ course.description }}</p>
          </div>

          <!-- Course Curriculum -->
          <div class="course-curriculum mb-4">
            <h2>منهج الدورة</h2>
            <div class="accordion" id="curriculumAccordion">
              <div v-for="(week, index) in course.curriculum" :key="index" class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button" type="button" :data-bs-toggle="'collapse'"
                    :data-bs-target="'#week' + index">
                    الأسبوع {{ week.week }}: {{ week.title }}
                  </button>
                </h3>
                <div :id="'week' + index" class="accordion-collapse collapse" :data-bs-parent="'#curriculumAccordion'">
                  <div class="accordion-body">
                    <ul class="list-unstyled">
                      <li v-for="(topic, topicIndex) in week.topics" :key="topicIndex" class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ topic }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Prerequisites -->
          <div class="course-prerequisites">
            <h2>المتطلبات السابقة</h2>
            <ul class="list-unstyled">
              <li v-for="(prereq, index) in course.prerequisites" :key="index" class="mb-2">
                <i class="bi bi-info-circle-fill text-info me-2"></i>
                {{ prereq }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="card course-sidebar">
            <div class="card-body">
              <h3 class="card-title">معلومات الدورة</h3>
              <div class="course-info">
                <div class="d-flex justify-content-between mb-2">
                  <span>المدرس:</span>
                  <span>{{ course.instructor }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>عدد الطلاب:</span>
                  <span>{{ course.students }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>التقييم:</span>
                  <span>
                    <i class="bi bi-star-fill text-warning"></i>
                    {{ course.rating }}
                  </span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <span>السعر:</span>
                  <span class="price">{{ course.price }} ريال</span>
                </div>
                <div class="course-actions mt-4">
                  <button v-if="!isInCart" class="btn btn-primary me-2" @click="addToCart">
                    <i class="bi bi-cart-plus me-2"></i>
                    إضافة إلى السلة
                  </button>
                  <button v-else class="btn btn-success me-2" @click="goToCart">
                    <i class="bi bi-cart-check me-2"></i>
                    الذهاب إلى السلة
                  </button>
                  <button class="btn btn-outline-primary" @click="enrollInCourse">
                    <i class="bi bi-play-circle me-2"></i>
                    التسجيل في الدورة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-details {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.course-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.course-meta {
  margin-bottom: 1.5rem;
}

.course-image img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.course-sidebar {
  position: sticky;
  top: 2rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0d6efd;
}

/* RTL Support */
[dir="rtl"] .course-meta .badge {
  margin-right: 0.5rem;
  margin-left: 0;
}

[dir="rtl"] .course-info i {
  margin-right: 0.5rem;
  margin-left: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .course-details {
    padding: 1rem 0;
  }

  .course-title {
    font-size: 1.5rem;
  }

  .course-sidebar {
    position: static;
    margin-top: 2rem;
  }
}

.course-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* RTL Support */
[dir="rtl"] .course-actions {
  flex-direction: row-reverse;
}

[dir="rtl"] .me-2 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
</style>
