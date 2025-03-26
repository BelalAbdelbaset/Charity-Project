<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Sample order data (in a real app, this would come from your backend)
const order = ref({
    id: 'ORD-123456',
    date: new Date().toLocaleDateString('ar-SA'),
    items: [
        {
            id: 1,
            title: 'مقدمة في البرمجة',
            price: 199,
            image: 'https://via.placeholder.com/150x100',
            instructor: 'أحمد محمد'
        },
        {
            id: 2,
            title: 'تطوير تطبيقات الويب',
            price: 299,
            image: 'https://via.placeholder.com/150x100',
            instructor: 'أحمد محمد'
        }
    ],
    subtotal: 498,
    tax: 74.7,
    total: 572.7,
    paymentMethod: 'بطاقة ائتمان',
    status: 'مكتمل'
})

const formatNumber = (number) => {
    return number.toLocaleString('ar-SA')
}

const navigateToCourses = () => {
    router.push('/courses')
}
</script>

<template>
    <div class="order-confirmation">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body text-center">
                            <!-- Success Icon -->
                            <div class="success-icon mb-4">
                                <i class="bi bi-check-circle-fill text-success" style="font-size: 4rem;"></i>
                            </div>

                            <!-- Success Message -->
                            <h1 class="mb-4">تم تأكيد طلبك بنجاح!</h1>
                            <p class="lead mb-4">شكراً لك على ثقتك بنا. سيتم إرسال تفاصيل الدخول إلى بريدك الإلكتروني.
                            </p>

                            <!-- Order Details -->
                            <div class="order-details mb-4">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="mb-1"><strong>رقم الطلب:</strong> {{ order.id }}</p>
                                        <p class="mb-1"><strong>تاريخ الطلب:</strong> {{ order.date }}</p>
                                        <p class="mb-1"><strong>طريقة الدفع:</strong> {{ order.paymentMethod }}</p>
                                        <p class="mb-1"><strong>حالة الطلب:</strong> {{ order.status }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Order Items -->
                            <div class="order-items mb-4">
                                <h3 class="mb-3">الدورات المشتراة</h3>
                                <div v-for="item in order.items" :key="item.id" class="d-flex align-items-center mb-3">
                                    <img :src="item.image" :alt="item.title" class="order-item-image me-2">
                                    <div class="flex-grow-1 text-start">
                                        <h6 class="mb-0">{{ item.title }}</h6>
                                        <small class="text-muted">{{ item.instructor }}</small>
                                    </div>
                                    <span>{{ formatNumber(item.price) }} ريال</span>
                                </div>
                            </div>

                            <!-- Order Summary -->
                            <div class="order-summary mb-4">
                                <div class="d-flex justify-content-between mb-2">
                                    <span>المجموع الفرعي</span>
                                    <span>{{ formatNumber(order.subtotal) }} ريال</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>الضريبة (15%)</span>
                                    <span>{{ formatNumber(order.tax) }} ريال</span>
                                </div>
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <strong>المجموع الكلي</strong>
                                    <strong>{{ formatNumber(order.total) }} ريال</strong>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" @click="navigateToCourses">
                                    العودة إلى الدورات
                                </button>
                                <button class="btn btn-outline-primary">
                                    تحميل الفاتورة
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.order-confirmation {
    padding: 4rem 0;
    background-color: #f8f9fa;
}

.order-item-image {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 0.25rem;
}

/* RTL Support */
[dir="rtl"] .order-item-image {
    margin-right: 0;
    margin-left: 0.5rem;
}

[dir="rtl"] .text-start {
    text-align: right !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .order-confirmation {
        padding: 2rem 0;
    }
}
</style>
