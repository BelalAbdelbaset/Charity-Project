<script setup>
const newsItems = [
  {
    id: 1,
    title: 'افتتاح مشروع جديد لدعم الأسر المحتاجة',
    date: '2024-03-15',
    summary: 'تم افتتاح مشروع جديد يهدف إلى دعم الأسر المحتاجة في المناطق النائية...',
    image: 'src/assets/Images/HomePage1.jpg'
  },
  {
    id: 2,
    title: 'حفل توزيع المنح الدراسية للطلاب المتفوقين',
    date: '2024-03-10',
    summary: 'نظمت الجمعية حفل توزيع المنح الدراسية للطلاب المتفوقين من الأسر المحتاجة...',
    image: 'src/assets/Images/HomePage2.jpg'
  },
  {
    id: 3,
    title: 'حملة تبرع جديدة لمساعدة المرضى',
    date: '2024-03-05',
    summary: 'أطلقت الجمعية حملة تبرع جديدة لمساعدة المرضى المحتاجين...',
    image: 'src/assets/Images/HomePage3.jpg'
  }
]
</script>

<template>
  <div class="news">
    <div class="container py-5">
      <h1 class="text-center mb-5">الأخبار والفعاليات</h1>

      <div class="row g-4">
        <div class="col-md-4" v-for="item in newsItems" :key="item.id">
          <div class="card h-100">
            <img :src="item.image" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text text-muted">{{ item.date }}</p>
              <p class="card-text">{{ item.summary }}</p>
              <router-link :to="'/news/' + item.id" class="btn btn-primary">اقرأ المزيد</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
