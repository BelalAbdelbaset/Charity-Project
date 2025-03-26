<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <h1 class="display-4 mb-4">اتصل بنا</h1>
        <p class="lead">نحن هنا لمساعدتك. لا تتردد في التواصل معنا</p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="contact-info py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marker-alt"></i>
                <h3 class="card-title">العنوان</h3>
                <p class="card-text">شارع الرئيسي، المدينة المنورة</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="fas fa-phone"></i>
                <h3 class="card-title">الهاتف</h3>
                <p class="card-text">123-456-789</p>
                <p class="card-text">987-654-321</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope"></i>
                <h3 class="card-title">البريد الإلكتروني</h3>
                <p class="card-text">info@charity.org</p>
                <p class="card-text">support@charity.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form and Map -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="contact-form">
              <h2 class="mb-4">أرسل رسالة</h2>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="fullName" class="form-label">الاسم الكامل</label>
                  <input type="text" class="form-control" id="fullName" v-model="formData.fullName" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">البريد الإلكتروني</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label">الموضوع</label>
                  <input type="text" class="form-control" id="subject" v-model="formData.subject" required>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">الرسالة</label>
                  <textarea class="form-control" id="message" v-model="formData.message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">إرسال</button>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.9024424301397!2d39.6112423!3d24.466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197f06e31%3A0x453c1f7c6c2c3c4d!2sMadinah%20Munawwarah!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">تابعنا على مواقع التواصل الاجتماعي</h2>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import '../assets/styles/ContactUs.css'
import { ref } from 'vue'

const formData = ref({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  // Reset form
  formData.value = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
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

.map-container {
  position: relative;
  overflow: hidden;
  padding-top: 450px;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.social-links a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2980b9 !important;
}
</style>
