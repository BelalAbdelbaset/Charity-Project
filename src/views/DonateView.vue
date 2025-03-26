<template>
  <div class="donate-page">
    <!-- Hero Section -->
    <section class="hero-section py-5 bg-light">
      <div class="container text-center">
        <h1 class="display-4 mb-4">تبرعك يغير حياة</h1>
        <p class="lead">كل تبرع، مهما كان صغيراً، يمكن أن يحدث فرقاً كبيراً في حياة شخص محتاج</p>
      </div>
    </section>

    <!-- Donation Options -->
    <section class="donation-options py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4" v-for="option in donationOptions" :key="option.id">
            <div class="card h-100 text-center" :class="{ 'selected': selectedOption === option.id }"
              @click="selectedOption = option.id">
              <div class="card-body">
                <i :class="option.icon" class="fa-3x text-primary mb-3"></i>
                <h3 class="card-title">{{ option.title }}</h3>
                <p class="card-text">{{ option.description }}</p>
                <div class="amount-input" v-if="selectedOption === option.id">
                  <div class="input-group mb-3">
                    <input type="number" class="form-control" v-model="customAmount" placeholder="أدخل المبلغ" min="1">
                    <span class="input-group-text">دينار</span>
                  </div>
                  <button class="btn btn-primary w-100" @click="proceedToPayment">
                    تبرع الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Donation -->
    <section class="quick-donation py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">تبرع سريع</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <button v-for="amount in quickAmounts" :key="amount" class="btn btn-outline-primary btn-lg"
                @click="customAmount = amount">
                {{ amount }} دينار
              </button>
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-primary btn-lg" @click="proceedToPayment">
                تبرع الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Monthly Donation -->
    <section class="monthly-donation py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2>تبرع شهري</h2>
            <p class="lead">كن شريكاً دائماً في عمل الخير من خلال التبرع الشهري</p>
            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="fas fa-check text-primary me-2"></i>
                دعم مستمر لمشاريعنا الخيرية
              </li>
              <li class="mb-2">
                <i class="fas fa-check text-primary me-2"></i>
                إمكانية إلغاء الاشتراك في أي وقت
              </li>
              <li class="mb-2">
                <i class="fas fa-check text-primary me-2"></i>
                تقارير شهرية عن استخدام تبرعاتك
              </li>
            </ul>
            <button class="btn btn-primary btn-lg mt-3" @click="showMonthlyForm = true">
              اشترك في التبرع الشهري
            </button>
          </div>
          <div class="col-lg-6">
            <img src="../assets/Images/monthly-donation.png" alt="تبرع شهري" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Monthly Donation Form Modal -->
    <div class="modal fade" :class="{ 'show': showMonthlyForm }" v-if="showMonthlyForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اشترك في التبرع الشهري</h5>
            <button type="button" class="btn-close" @click="showMonthlyForm = false"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitMonthlyDonation">
              <div class="mb-3">
                <label class="form-label">المبلغ الشهري</label>
                <div class="input-group">
                  <input type="number" class="form-control" v-model="monthlyAmount" min="1">
                  <span class="input-group-text">دينار</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">البريد الإلكتروني</label>
                <input type="email" class="form-control" v-model="email" required>
              </div>
              <div class="mb-3">
                <label class="form-label">رقم الهاتف</label>
                <input type="tel" class="form-control" v-model="phone" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">اشترك الآن</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const donationOptions = [
  {
    id: 1,
    title: 'تبرع عام',
    description: 'تبرع لمشاريع الجمعية العامة',
    icon: 'fas fa-hand-holding-heart'
  },
  {
    id: 2,
    title: 'تبرع لمشروع محدد',
    description: 'اختر مشروعاً محدداً للتبرع له',
    icon: 'fas fa-project-diagram'
  },
  {
    id: 3,
    title: 'تبرع للصندوق الطارئ',
    description: 'دعم صندوق الطوارئ للاستجابة السريعة',
    icon: 'fas fa-ambulance'
  }
]

const quickAmounts = [10, 20, 50, 100, 200]
const selectedOption = ref(null)
const customAmount = ref('')
const showMonthlyForm = ref(false)
const monthlyAmount = ref('')
const email = ref('')
const phone = ref('')

const proceedToPayment = () => {
  // Implement payment processing logic here
  console.log('Processing payment:', {
    amount: customAmount.value,
    option: selectedOption.value
  })
}

const submitMonthlyDonation = () => {
  // Implement monthly donation subscription logic here
  console.log('Submitting monthly donation:', {
    amount: monthlyAmount.value,
    email: email.value,
    phone: phone.value
  })
  showMonthlyForm.value = false
}
</script>

<style scoped>
.donate-page {
  direction: rtl;
}

.hero-section {
  background-color: #f8f9fa;
}

.card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card.selected {
  border-color: #3498db;
  box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
}

.amount-input {
  margin-top: 1rem;
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
</style>
