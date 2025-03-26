<template>
  <div class="container mt-5 mb-4">
    <h2 class="text-center mb-4">تواصل معنا</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4 shadow">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">الاسم بالكامل</label>
              <input type="text" id="name" v-model="form.name" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">الايميل</label>
              <input type="email" id="email" v-model="form.email" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="number" class="form-label">رقم الموبايل</label>
              <input type="number" id="number" v-model="form.number" class="form-control" required />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">نص الرساله</label>
              <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100">ارسال</button>
          </form>
        </div>

        <div v-if="submitted" class="alert alert-success mt-3" role="alert">
          Thank you! Your message has been sent.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        number: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      if (this.form.name && this.form.email && this.form.number && this.form.message) {
        this.submitted = true;

        // Reset form after submission (Optional)
        setTimeout(() => {
          this.submitted = false;
          this.form.name = '';
          this.form.email = '';
          this.form.number = '';
          this.form.message = '';
        }, 3000);
      }
    }
  }
};
</script>

<style>
.card {
  border-radius: 10px;
}
</style>
