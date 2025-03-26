<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Saudi Arabia',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
})

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

// Form validation
const errors = ref({})
const isSubmitting = ref(false)

const validateForm = () => {
    errors.value = {}

    if (!formData.value.firstName) errors.value.firstName = 'الاسم الأول مطلوب'
    if (!formData.value.lastName) errors.value.lastName = 'الاسم الأخير مطلوب'
    if (!formData.value.email) errors.value.email = 'البريد الإلكتروني مطلوب'
    if (!formData.value.phone) errors.value.phone = 'رقم الهاتف مطلوب'
    if (!formData.value.address) errors.value.address = 'العنوان مطلوب'
    if (!formData.value.city) errors.value.city = 'المدينة مطلوبة'
    if (!formData.value.cardNumber) errors.value.cardNumber = 'رقم البطاقة مطلوب'
    if (!formData.value.cardName) errors.value.cardName = 'اسم البطاقة مطلوب'
    if (!formData.value.expiryDate) errors.value.expiryDate = 'تاريخ الانتهاء مطلوب'
    if (!formData.value.cvv) errors.value.cvv = 'رمز CVV مطلوب'

    return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
    if (!validateForm()) return

    isSubmitting.value = true

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        // In a real app, you would:
        // 1. Send the order to your backend
        // 2. Process the payment through a payment gateway
        // 3. Create an order record

        // For demo purposes, we'll just show a success message
        router.push('/order-confirmation')
    } catch (error) {
        console.error('Payment failed:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <div class="checkout">
        <div class="container">
            <h1 class="mb-4">إتمام الشراء</h1>

            <div class="row">
                <!-- Checkout Form -->
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title mb-4">معلومات الدفع</h3>

                            <!-- Personal Information -->
                            <div class="mb-4">
                                <h4 class="mb-3">المعلومات الشخصية</h4>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">الاسم الأول</label>
                                        <input type="text" class="form-control" v-model="formData.firstName"
                                            :class="{ 'is-invalid': errors.firstName }">
                                        <div class="invalid-feedback">{{ errors.firstName }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">الاسم الأخير</label>
                                        <input type="text" class="form-control" v-model="formData.lastName"
                                            :class="{ 'is-invalid': errors.lastName }">
                                        <div class="invalid-feedback">{{ errors.lastName }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">البريد الإلكتروني</label>
                                        <input type="email" class="form-control" v-model="formData.email"
                                            :class="{ 'is-invalid': errors.email }">
                                        <div class="invalid-feedback">{{ errors.email }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">رقم الهاتف</label>
                                        <input type="tel" class="form-control" v-model="formData.phone"
                                            :class="{ 'is-invalid': errors.phone }">
                                        <div class="invalid-feedback">{{ errors.phone }}</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Address -->
                            <div class="mb-4">
                                <h4 class="mb-3">العنوان</h4>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">العنوان</label>
                                        <input type="text" class="form-control" v-model="formData.address"
                                            :class="{ 'is-invalid': errors.address }">
                                        <div class="invalid-feedback">{{ errors.address }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">المدينة</label>
                                        <input type="text" class="form-control" v-model="formData.city"
                                            :class="{ 'is-invalid': errors.city }">
                                        <div class="invalid-feedback">{{ errors.city }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">الدولة</label>
                                        <select class="form-select" v-model="formData.country">
                                            <option value="Saudi Arabia">المملكة العربية السعودية</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Payment Information -->
                            <div>
                                <h4 class="mb-3">معلومات البطاقة</h4>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">رقم البطاقة</label>
                                        <input type="text" class="form-control" v-model="formData.cardNumber"
                                            :class="{ 'is-invalid': errors.cardNumber }">
                                        <div class="invalid-feedback">{{ errors.cardNumber }}</div>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">اسم البطاقة</label>
                                        <input type="text" class="form-control" v-model="formData.cardName"
                                            :class="{ 'is-invalid': errors.cardName }">
                                        <div class="invalid-feedback">{{ errors.cardName }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">تاريخ الانتهاء</label>
                                        <input type="text" class="form-control" placeholder="MM/YY"
                                            v-model="formData.expiryDate" :class="{ 'is-invalid': errors.expiryDate }">
                                        <div class="invalid-feedback">{{ errors.expiryDate }}</div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">رمز CVV</label>
                                        <input type="text" class="form-control" v-model="formData.cvv"
                                            :class="{ 'is-invalid': errors.cvv }">
                                        <div class="invalid-feedback">{{ errors.cvv }}</div>
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

                            <!-- Order Items -->
                            <div class="order-items mb-3">
                                <div v-for="item in cartItems" :key="item.id" class="d-flex align-items-center mb-2">
                                    <img :src="item.image" :alt="item.title" class="order-item-image me-2">
                                    <div class="flex-grow-1">
                                        <h6 class="mb-0">{{ item.title }}</h6>
                                        <small class="text-muted">{{ item.instructor }}</small>
                                    </div>
                                    <span>{{ item.price }} ريال</span>
                                </div>
                            </div>

                            <hr>

                            <!-- Order Total -->
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

                            <!-- Submit Button -->
                            <button class="btn btn-primary w-100" @click="handleSubmit" :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"
                                    role="status"></span>
                                {{ isSubmitting ? 'جاري المعالجة...' : 'تأكيد الدفع' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.checkout {
    padding: 2rem 0;
    background-color: #f8f9fa;
}

.order-item-image {
    width: 60px;
    height: 40px;
    object-fit: cover;
    border-radius: 0.25rem;
}

/* RTL Support */
[dir="rtl"] .order-item-image {
    margin-right: 0;
    margin-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .checkout {
        padding: 1rem 0;
    }
}
</style>
