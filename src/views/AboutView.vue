<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section py-5 bg-light">
      <div class="container text-center">
        <h1 class="display-4 mb-4">من نحن</h1>
        <p class="lead">نعمل منذ عام 2010 على خدمة المجتمع وتحسين حياة المحتاجين</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="fas fa-bullseye fa-3x text-primary mb-3"></i>
                <h3 class="card-title">رؤيتنا</h3>
                <p class="card-text">نسعى لبناء مجتمع متكامل ومتضامن، حيث يتمتع كل فرد بفرص متساوية في الحياة</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <i class="fas fa-flag fa-3x text-primary mb-3"></i>
                <h3 class="card-title">رسالتنا</h3>
                <p class="card-text">تقديم المساعدة والدعم للمحتاجين من خلال مشاريع تنموية مستدامة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="values-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">قيمنا</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="value in values" :key="value.id">
            <div class="card h-100 text-center">
              <div class="card-body">
                <i :class="value.icon" class="fa-3x text-primary mb-3"></i>
                <h3 class="card-title">{{ value.title }}</h3>
                <p class="card-text">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Impact -->
    <section class="impact-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">تأثيرنا</h2>
        <div class="row g-4">
          <div class="col-md-3" v-for="stat in impactStats" :key="stat.id">
            <div class="text-center">
              <div class="display-4 text-primary mb-2">{{ stat.value }}</div>
              <div class="text-muted">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="team-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">فريقنا</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="member in teamMembers" :key="member.id">
            <div class="card h-100 text-center">
              <img :src="member.image" class="card-img-top" :alt="member.name">
              <div class="card-body">
                <h5 class="card-title">{{ member.name }}</h5>
                <p class="card-text text-muted">{{ member.position }}</p>
                <div class="social-links">
                  <a :href="member.facebook" class="text-primary me-2" v-if="member.facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a :href="member.twitter" class="text-primary me-2" v-if="member.twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a :href="member.linkedin" class="text-primary" v-if="member.linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">شركاؤنا</h2>
        <div class="row align-items-center">
          <div class="col-md-3 col-6" v-for="partner in partners" :key="partner.id">
            <div class="text-center">
              <img :src="partner.logo" :alt="partner.name" class="img-fluid partner-logo">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    id: 1,
    title: 'النزاهة',
    description: 'نلتزم بأعلى معايير الشفافية والنزاهة في جميع أعمالنا',
    icon: 'fas fa-check-circle'
  },
  {
    id: 2,
    title: 'التضامن',
    description: 'نؤمن بقوة التضامن المجتمعي في تحقيق التغيير الإيجابي',
    icon: 'fas fa-hands-helping'
  },
  {
    id: 3,
    title: 'الاستدامة',
    description: 'نعمل على تنفيذ مشاريع مستدامة تحقق أثراً طويل الأمد',
    icon: 'fas fa-leaf'
  }
]

const impactStats = [
  {
    id: 1,
    value: '1000+',
    label: 'مشروع منجز'
  },
  {
    id: 2,
    value: '5000+',
    label: 'مستفيد'
  },
  {
    id: 3,
    value: '200+',
    label: 'متطوع نشط'
  },
  {
    id: 4,
    value: '50+',
    label: 'شريك استراتيجي'
  }
]

const teamMembers = [
  {
    id: 1,
    name: 'أحمد محمد',
    position: 'رئيس الجمعية',
    image: '../assets/team1.jpg',
    facebook: '#',
    twitter: '#',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'سارة أحمد',
    position: 'مديرة المشاريع',
    image: '../assets/team2.jpg',
    facebook: '#',
    twitter: '#',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'محمد علي',
    position: 'مدير التطوع',
    image: '../assets/team3.jpg',
    facebook: '#',
    twitter: '#',
    linkedin: '#'
  }
]

const partners = [
  {
    id: 1,
    name: 'شركة الخير',
    logo: '../assets/partner1.png'
  },
  {
    id: 2,
    name: 'مؤسسة العطاء',
    logo: '../assets/partner2.png'
  },
  {
    id: 3,
    name: 'جمعية الإحسان',
    logo: '../assets/partner3.png'
  },
  {
    id: 4,
    name: 'مؤسسة النور',
    logo: '../assets/partner4.png'
  }
]
</script>

<style scoped>
.about-page {
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

.text-primary {
  color: #3498db !important;
}

.partner-logo {
  max-height: 80px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0%);
}

.social-links a {
  text-decoration: none;
  font-size: 1.2rem;
}

.social-links a:hover {
  color: #2980b9 !important;
}
</style>
