<script setup>
import '../assets/styles/Footer.css'

defineOptions({
    name: 'MainFooter'
})
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h3 class="footer-title">عن جمعية الخير</h3>
                    <p>نسعى لتقديم المساعدة والدعم للمحتاجين وتحسين جودة حياتهم من خلال مشاريعنا الخيرية المتنوعة.</p>
                </div>
                <div class="col-md-4 mb-4">
                    <h3 class="footer-title">روابط سريعة</h3>
                    <ul class="footer-links">
                        <li><router-link to="/about">من نحن</router-link></li>
                        <li><router-link to="/projects">مشاريعنا</router-link></li>
                        <li><router-link to="/donate">تبرع الآن</router-link></li>
                        <li><router-link to="/volunteer">التطوع</router-link></li>
                        <li><router-link to="/contact">اتصل بنا</router-link></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h3 class="footer-title">تواصل معنا</h3>
                    <p>العنوان: شارع الرئيسي، المدينة المنورة</p>
                    <p>الهاتف: 123-456-789</p>
                    <p>البريد الإلكتروني: info@charity.org</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; {{ new Date().getFullYear() }} جمعية الخير. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>
</template>
