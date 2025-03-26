<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Sample cart data (in a real app, this would come from a store/state management)
const cartItems = ref([
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
])

// Computed properties
const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price, 0)
})

const tax = computed(() => {
    return subtotal.value * 0.15 // 15% tax
})

const total = computed(() => {
    return subtotal.value + tax.value
})

// Methods
const removeFromCart = (courseId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== courseId)
}

const proceedToCheckout = () => {
    router.push('/checkout')
}
</script>

<template>
    <div class="cart">
        <div class="container">
            <h1 class="mb-4">سلة التسوق</h1>

            <!-- Cart Items -->
            <div class="row">
                <div class="col-lg-8">
                    <div v-if="cartItems.length === 0" class="text-center py-5">
                        <i class="bi bi-cart-x display-1 text-muted"></i>
                        <h3 class="mt-3">السلة فارغة</h3>
                        <p class="text-muted">لم تقم بإضافة أي دورات بعد</p>
                        <button class="btn btn-primary mt-3" @click="router.push('/courses')">
                            تصفح الدورات
                        </button>
                    </div>

                    <div v-else class="cart-items">
                        <div v-for="item in cartItems" :key="item.id" class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <img :src="item.image" :alt="item.title" class="cart-item-image me-3">
                                    <div class="flex-grow-1">
                                        <h5 class="card-title mb-1">{{ item.title }}</h5>
                                        <p class="card-text text-muted mb-0">
                                            <small>المدرس: {{ item.instructor }}</small>
                                        </p>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="mb-0">{{ item.price }} ريال</h5>
                                        <button class="btn btn-link text-danger p-0" @click="removeFromCart(item.id)">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">ملخص الطلب</h3>
                            <div class="d-flex justify-content-between mb-2">
                                <span>المجموع الفرعي</span>
                                <span>{{ subtotal }} ريال</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>الضريبة (15%)</span>
                                <span>{{ tax }} ريال</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between mb-3">
                                <strong>المجموع الكلي</strong>
                                <strong>{{ total }} ريال</strong>
                            </div>
                            <button class="btn btn-primary w-100" @click="proceedToCheckout">
                                إتمام الشراء
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart {
    padding: 2rem 0;
    background-color: #f8f9fa;
}

.cart-item-image {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 0.5rem;
}

/* RTL Support */
[dir="rtl"] .cart-item-image {
    margin-right: 0;
    margin-left: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .cart {
        padding: 1rem 0;
    }

    .cart-item-image {
        width: 100px;
        height: 70px;
    }
}
</style>
