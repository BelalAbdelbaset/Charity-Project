<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const grade = ref(null)
const loading = ref(true)
const error = ref(null)

// Sample grades data (in a real app, this would come from an API)
const sampleGrades = [
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
        requirements: ['شهادة رياض الأطفال', 'عمر 6 سنوات'],
        curriculum: [
            {
                subject: 'القراءة',
                description: 'تعلم أساسيات القراءة والكتابة',
                topics: ['الحروف الأبجدية', 'الكلمات البسيطة', 'الجمل القصيرة']
            },
            {
                subject: 'الرياضيات',
                description: 'تعلم الأرقام والعمليات الحسابية الأساسية',
                topics: ['الأرقام من 1 إلى 100', 'الجمع والطرح', 'الأشكال الهندسية']
            }
        ],
        activities: [
            {
                name: 'الرسم والتلوين',
                description: 'تطوير المهارات الحركية الدقيقة',
                schedule: 'الخميس 10:00 - 11:00'
            },
            {
                name: 'التربية البدنية',
                description: 'تطوير المهارات الحركية',
                schedule: 'السبت 9:00 - 10:00'
            }
        ]
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
        requirements: ['اجتياز الصف الأول'],
        curriculum: [
            {
                subject: 'القراءة',
                description: 'تحسين مهارات القراءة والكتابة',
                topics: ['النصوص القصيرة', 'القواعد الأساسية', 'التعبير الكتابي']
            }
        ],
        activities: [
            {
                name: 'الرسم والتلوين',
                description: 'تطوير المهارات الحركية الدقيقة',
                schedule: 'الخميس 10:00 - 11:00'
            }
        ]
    }
]

onMounted(() => {
    // Simulate API call
    setTimeout(() => {
        const gradeId = parseInt(route.params.id)
        const foundGrade = sampleGrades.find(g => g.id === gradeId)

        if (foundGrade) {
            grade.value = foundGrade
            error.value = null
        } else {
            error.value = 'لم يتم العثور على الصف'
        }

        loading.value = false
    }, 500)
})

// Format number with commas
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
</script>

<template>
    <div class="grade-details">
        <div class="container">
            <!-- Back Button -->
            <button class="btn btn-outline-primary mb-3" @click="router.back()">
                <i class="bi bi-arrow-right"></i> العودة للصفوف
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

            <!-- Grade Content -->
            <div v-else-if="grade" class="row">
                <!-- Main Content -->
                <div class="col-lg-8">
                    <!-- Grade Header -->
                    <div class="grade-header mb-4">
                        <div class="d-flex align-items-center gap-4">
                            <div class="grade-image">
                                <img :src="grade.image" :alt="grade.name" class="img-fluid rounded">
                            </div>
                            <div>
                                <h1 class="grade-name">{{ grade.name }}</h1>
                                <div class="grade-meta">
                                    <span class="badge bg-primary me-2">{{ grade.level }}</span>
                                    <span class="badge bg-info">
                                        <i class="bi bi-clock"></i> {{ grade.schedule }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="description-section mb-4">
                        <h2>وصف الصف</h2>
                        <p>{{ grade.description }}</p>
                    </div>

                    <!-- Requirements -->
                    <div class="requirements-section mb-4">
                        <h2>متطلبات القبول</h2>
                        <ul class="list-group">
                            <li v-for="req in grade.requirements" :key="req" class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success me-2"></i>
                                {{ req }}
                            </li>
                        </ul>
                    </div>

                    <!-- Curriculum -->
                    <div class="curriculum-section mb-4">
                        <h2>المنهج الدراسي</h2>
                        <div class="accordion" id="curriculumAccordion">
                            <div v-for="(subject, index) in grade.curriculum" :key="subject.subject"
                                class="accordion-item">
                                <h3 class="accordion-header">
                                    <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button"
                                        :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + index">
                                        {{ subject.subject }}
                                    </button>
                                </h3>
                                <div :id="'collapse' + index" class="accordion-collapse collapse"
                                    :class="{ 'show': index === 0 }" :data-bs-parent="'#curriculumAccordion'">
                                    <div class="accordion-body">
                                        <p>{{ subject.description }}</p>
                                        <ul class="list-group list-group-flush">
                                            <li v-for="topic in subject.topics" :key="topic" class="list-group-item">
                                                <i class="bi bi-bookmark-fill text-primary me-2"></i>
                                                {{ topic }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Activities -->
                    <div class="activities-section mb-4">
                        <h2>الأنشطة</h2>
                        <div class="row g-3">
                            <div v-for="activity in grade.activities" :key="activity.name" class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ activity.name }}</h5>
                                        <p class="card-text">{{ activity.description }}</p>
                                        <small class="text-muted">
                                            <i class="bi bi-clock"></i> {{ activity.schedule }}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <!-- Stats Card -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">إحصائيات</h3>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <i class="bi bi-people-fill text-primary"></i>
                                    <div>
                                        <h4>{{ formatNumber(grade.students) }}</h4>
                                        <small>عدد الطلاب</small>
                                    </div>
                                </div>
                                <div class="stat-item">
                                    <i class="bi bi-person-workspace text-success"></i>
                                    <div>
                                        <h4>{{ grade.teachers }}</h4>
                                        <small>عدد المدرسين</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Subjects Card -->
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">المواد الدراسية</h3>
                            <div class="subjects-list">
                                <div v-for="subject in grade.subjects" :key="subject" class="subject-item">
                                    <i class="bi bi-book-fill text-primary me-2"></i>
                                    {{ subject }}
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
.grade-details {
    padding: 2rem 0;
    background-color: #f8f9fa;
}

.grade-image img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.grade-name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.grade-meta {
    margin-bottom: 1rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
}

.stat-item i {
    font-size: 2rem;
}

.stat-item h4 {
    margin: 0;
    font-size: 1.5rem;
}

.subjects-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.subject-item {
    padding: 0.75rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
}

/* RTL Support */
[dir="rtl"] .grade-meta .badge {
    margin-right: 0;
    margin-left: 0.5rem;
}

[dir="rtl"] .stat-item {
    flex-direction: row-reverse;
}

[dir="rtl"] .subject-item {
    flex-direction: row-reverse;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grade-details {
        padding: 1rem 0;
    }

    .grade-image img {
        width: 100%;
        height: 200px;
    }

    .grade-name {
        font-size: 1.5rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }
}
</style>
