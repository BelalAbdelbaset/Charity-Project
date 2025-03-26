<template>
    <div class="volunteer-page">
        <!-- Hero Section -->
        <section class="hero-section py-5 bg-light">
            <div class="container text-center">
                <h1 class="display-4 mb-4">كن متطوعاً</h1>
                <p class="lead">شاركنا في عمل الخير وكن جزءاً من التغيير الإيجابي في المجتمع</p>
            </div>
        </section>

        <!-- Volunteer Benefits -->
        <section class="benefits-section py-5">
            <div class="container">
                <h2 class="text-center mb-5">مميزات التطوع</h2>
                <div class="row g-4">
                    <div class="col-md-4" v-for="benefit in benefits" :key="benefit.id">
                        <div class="card h-100 text-center">
                            <div class="card-body">
                                <i :class="benefit.icon" class="fa-3x text-primary mb-3"></i>
                                <h3 class="card-title">{{ benefit.title }}</h3>
                                <p class="card-text">{{ benefit.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Volunteer Opportunities -->
        <section class="opportunities-section py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">فرص التطوع المتاحة</h2>
                <div class="row g-4">
                    <div class="col-md-6" v-for="opportunity in opportunities" :key="opportunity.id">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">{{ opportunity.title }}</h5>
                                <p class="card-text">{{ opportunity.description }}</p>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <i class="fas fa-clock text-primary me-2"></i>
                                        {{ opportunity.time }}
                                    </li>
                                    <li class="mb-2">
                                        <i class="fas fa-map-marker-alt text-primary me-2"></i>
                                        {{ opportunity.location }}
                                    </li>
                                    <li class="mb-2">
                                        <i class="fas fa-users text-primary me-2"></i>
                                        {{ opportunity.required }}
                                    </li>
                                </ul>
                                <button class="btn btn-primary" @click="showVolunteerForm(opportunity)">
                                    تطوع الآن
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Volunteer Form Modal -->
        <div class="modal fade" :class="{ 'show': showForm }" v-if="showForm">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">تسجيل التطوع</h5>
                        <button type="button" class="btn-close" @click="showForm = false"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitVolunteerForm">
                            <div class="mb-3">
                                <label class="form-label">الاسم الكامل</label>
                                <input type="text" class="form-control" v-model="formData.name" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">البريد الإلكتروني</label>
                                <input type="email" class="form-control" v-model="formData.email" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">رقم الهاتف</label>
                                <input type="tel" class="form-control" v-model="formData.phone" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">العمر</label>
                                <input type="number" class="form-control" v-model="formData.age" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">المؤهل العلمي</label>
                                <select class="form-select" v-model="formData.education" required>
                                    <option value="">اختر المؤهل العلمي</option>
                                    <option value="high-school">ثانوية عامة</option>
                                    <option value="diploma">دبلوم</option>
                                    <option value="bachelor">بكالوريوس</option>
                                    <option value="master">ماجستير</option>
                                    <option value="phd">دكتوراه</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">الخبرات السابقة في التطوع</label>
                                <textarea class="form-control" v-model="formData.experience" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">المهارات</label>
                                <div class="form-check" v-for="skill in skills" :key="skill.id">
                                    <input class="form-check-input" type="checkbox" v-model="formData.skills"
                                        :value="skill.id">
                                    <label class="form-check-label">{{ skill.name }}</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">إرسال الطلب</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const benefits = [
    {
        id: 1,
        title: 'تطوير المهارات',
        description: 'اكتساب مهارات جديدة وتطوير المهارات الحالية',
        icon: 'fas fa-graduation-cap'
    },
    {
        id: 2,
        title: 'بناء العلاقات',
        description: 'التعرف على أشخاص جدد وتوسيع شبكة العلاقات',
        icon: 'fas fa-users'
    },
    {
        id: 3,
        title: 'تأثير إيجابي',
        description: 'المساهمة في تحسين حياة الآخرين',
        icon: 'fas fa-heart'
    }
]

const opportunities = [
    {
        id: 1,
        title: 'توزيع المساعدات',
        description: 'المساعدة في توزيع المساعدات الغذائية والملابس',
        time: 'مرتين في الأسبوع',
        location: 'مركز الجمعية',
        required: '5 متطوعين'
    },
    {
        id: 2,
        title: 'دعم تعليمي',
        description: 'مساعدة الطلاب في دراستهم',
        time: 'مرتين في الأسبوع',
        location: 'مركز التعليم',
        required: '10 متطوعين'
    },
    {
        id: 3,
        title: 'تنظيم الفعاليات',
        description: 'المساعدة في تنظيم الفعاليات الخيرية',
        time: 'حسب الفعالية',
        location: 'مختلف المواقع',
        required: '8 متطوعين'
    },
    {
        id: 4,
        title: 'دعم نفسي',
        description: 'تقديم الدعم النفسي للمحتاجين',
        time: 'مرة في الأسبوع',
        location: 'مركز الدعم النفسي',
        required: '3 متطوعين'
    }
]

const skills = [
    { id: 1, name: 'التواصل' },
    { id: 2, name: 'التنظيم' },
    { id: 3, name: 'التعليم' },
    { id: 4, name: 'الرعاية الصحية' },
    { id: 5, name: 'التصوير' },
    { id: 6, name: 'التصميم' }
]

const showForm = ref(false)
const formData = ref({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    experience: '',
    skills: [],
    opportunityId: '',
    opportunityTitle: ''
})

const showVolunteerForm = (opportunity) => {
    showForm.value = true
    formData.value.opportunityId = opportunity.id
    formData.value.opportunityTitle = opportunity.title
}

const submitVolunteerForm = () => {
    // Implement form submission logic here
    console.log('Submitting volunteer form:', formData.value)
    showForm.value = false
    // Reset form
    formData.value = {
        name: '',
        email: '',
        phone: '',
        age: '',
        education: '',
        experience: '',
        skills: [],
        opportunityId: '',
        opportunityTitle: ''
    }
}
</script>

<style scoped>
.volunteer-page {
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

.btn-primary {
    background-color: #3498db;
    border-color: #3498db;
}

.btn-primary:hover {
    background-color: #2980b9;
    border-color: #2980b9;
}

.modal {
    background-color: rgba(0, 0, 0, 0.5);
}

.modal.show {
    display: block;
}

.form-check {
    margin-bottom: 0.5rem;
}
</style>
