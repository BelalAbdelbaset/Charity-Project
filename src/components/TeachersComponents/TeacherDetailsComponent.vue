<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const teacher = ref(null)
const loading = ref(true)
const error = ref(null)

// Sample teachers data (in a real app, this would come from an API)
const sampleTeachers = [
    {
        id: 1,
        name: 'أحمد محمد',
        specialization: 'برمجة',
        image: 'https://via.placeholder.com/200x200',
        rating: 4.8,
        students: 1200,
        teacherCourses: 15,
        experience: '8 سنوات',
        bio: 'مدرس متخصص في تطوير البرمجيات مع خبرة طويلة في تدريس البرمجة للمبتدئين',
        expertise: ['JavaScript', 'Python', 'Java', 'Web Development'],
        education: [
            {
                degree: 'بكالوريوس علوم حاسب',
                university: 'جامعة الملك فهد للبترول والمعادن',
                year: '2015'
            }
        ],
        certifications: [
            {
                name: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                year: '2020'
            },
            {
                name: 'Professional Web Developer',
                issuer: 'Meta',
                year: '2021'
            }
        ],
        courses: [
            {
                id: 1,
                title: 'مقدمة في البرمجة',
                students: 300,
                rating: 4.9
            },
            {
                id: 2,
                title: 'تطوير تطبيقات الويب',
                students: 250,
                rating: 4.8
            }
        ]
    },
    {
        id: 2,
        name: 'سارة أحمد',
        specialization: 'تصميم',
        image: 'https://via.placeholder.com/200x200',
        rating: 4.9,
        students: 850,
        teacherCourses: 12,
        experience: '6 سنوات',
        bio: 'مصممة جرافيك محترفة ومدرسة في مجال التصميم الرقمي',
        expertise: ['UI/UX Design', 'Adobe Photoshop', 'Figma', 'Web Design'],
        education: [
            {
                degree: 'بكالوريوس تصميم جرافيك',
                university: 'جامعة الملك عبدالعزيز',
                year: '2018'
            }
        ],
        certifications: [
            {
                name: 'UI/UX Design Professional',
                issuer: 'Google',
                year: '2020'
            }
        ],
        courses: [
            {
                id: 3,
                title: 'أساسيات التصميم الجرافيكي',
                students: 200,
                rating: 4.9
            }
        ]
    }
]

onMounted(() => {
    // Simulate API call
    setTimeout(() => {
        const teacherId = parseInt(route.params.id)
        const foundTeacher = sampleTeachers.find(t => t.id === teacherId)

        if (foundTeacher) {
            teacher.value = foundTeacher
            error.value = null
        } else {
            error.value = 'لم يتم العثور على المدرس'
        }

        loading.value = false
    }, 500)
})

// Format number with commas
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const navigateToCourse = (courseId) => {
    router.push(`/course/${courseId}`)
}
</script>

<template>
    <div class="teacher-details">
        <div class="container">
            <!-- Back Button -->
            <button class="btn btn-outline-primary mb-3" @click="router.back()">
                <i class="bi bi-arrow-right"></i> العودة للمدرسين
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

            <!-- Teacher Content -->
            <div v-else-if="teacher" class="row">
                <!-- Main Content -->
                <div class="col-lg-8">
                    <!-- Teacher Header -->
                    <div class="teacher-header mb-4">
                        <div class="d-flex align-items-center gap-4">
                            <div class="teacher-image">
                                <img :src="teacher.image" :alt="teacher.name" class="rounded-circle">
                            </div>
                            <div>
                                <h1 class="teacher-name">{{ teacher.name }}</h1>
                                <div class="teacher-meta">
                                    <span class="badge bg-primary me-2">{{ teacher.specialization }}</span>
                                    <span class="badge bg-info me-2">{{ teacher.experience }}</span>
                                    <span class="badge bg-warning">
                                        <i class="bi bi-star-fill"></i> {{ teacher.rating }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bio -->
                    <div class="bio-section mb-4">
                        <h2>نبذة عن المدرس</h2>
                        <p>{{ teacher.bio }}</p>
                    </div>

                    <!-- Expertise -->
                    <div class="expertise-section mb-4">
                        <h2>المهارات والخبرات</h2>
                        <div class="expertise-tags">
                            <span v-for="skill in teacher.expertise" :key="skill"
                                class="badge bg-light text-dark me-2 mb-2">
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <!-- Education -->
                    <div class="education-section mb-4">
                        <h2>المؤهلات العلمية</h2>
                        <div class="timeline">
                            <div v-for="edu in teacher.education" :key="edu.degree" class="timeline-item">
                                <div class="timeline-content">
                                    <h5>{{ edu.degree }}</h5>
                                    <p class="mb-1">{{ edu.university }}</p>
                                    <small class="text-muted">{{ edu.year }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Certifications -->
                    <div class="certifications-section mb-4">
                        <h2>الشهادات المهنية</h2>
                        <div class="timeline">
                            <div v-for="cert in teacher.certifications" :key="cert.name" class="timeline-item">
                                <div class="timeline-content">
                                    <h5>{{ cert.name }}</h5>
                                    <p class="mb-1">{{ cert.issuer }}</p>
                                    <small class="text-muted">{{ cert.year }}</small>
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
                                        <h4>{{ formatNumber(teacher.students) }}</h4>
                                        <small>عدد الطلاب</small>
                                    </div>
                                </div>
                                <div class="stat-item">
                                    <i class="bi bi-book-fill text-success"></i>
                                    <div>
                                        <h4>{{ teacher.teacherCourses }}</h4>
                                        <small>عدد الدورات</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Courses Card -->
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">الدورات المتاحة</h3>
                            <div class="courses-list">
                                <div v-for="course in teacher.courses" :key="course.id" class="course-item"
                                    @click="navigateToCourse(course.id)">
                                    <h5>{{ course.title }}</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-muted">{{ formatNumber(course.students) }} طالب</small>
                                        <span class="badge bg-warning">
                                            <i class="bi bi-star-fill"></i> {{ course.rating }}
                                        </span>
                                    </div>
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
.teacher-details {
    padding: 2rem 0;
    background-color: #f8f9fa;
}

.teacher-image img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 3px solid #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.teacher-name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.teacher-meta {
    margin-bottom: 1rem;
}

.expertise-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.timeline {
    position: relative;
    padding-right: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #dee2e6;
}

.timeline-item {
    position: relative;
    padding-bottom: 1.5rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    right: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #0d6efd;
    border: 2px solid #fff;
}

.timeline-content {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
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

.courses-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.course-item {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.course-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* RTL Support */
[dir="rtl"] .timeline {
    padding-right: 0;
    padding-left: 2rem;
}

[dir="rtl"] .timeline::before {
    right: auto;
    left: 0;
}

[dir="rtl"] .timeline-item::before {
    right: auto;
    left: -2rem;
}

[dir="rtl"] .expertise-tags .badge {
    margin-right: 0;
    margin-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .teacher-details {
        padding: 1rem 0;
    }

    .teacher-image img {
        width: 120px;
        height: 120px;
    }

    .teacher-name {
        font-size: 1.5rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }
}
</style>
