<script setup>
import { RouterLink } from 'vue-router'
import { routes } from '@/router';
import socials from '@/router/socialmedia';
</script>
<template>
  <!-- Start Footer -->
  <div class="footer pt-5 pb-5 text-white text-center text-md-end">
    <div class="container pt-5">
      <div class="row">
        <!--col-1-->
        <div class="col-md-6 col-lg-4 text-start">
          <div class="info">
            <img class="mb-4 footer-image w-25" src="../../assets/Images/logo.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae voluptatibus vitae optio
              velit eum adipisci odio aperiam esse quos expedita sint iure sit minus, animi vel reprehenderit et veniam.
            </p>
            <div class="copyright">
              Disigned by <span>BELAL</span>
              <div>
                &copy; 2023 - <span>BELAL PORTFOLIO</span>
              </div>
            </div>
          </div>
        </div>
        <!--col-2-->
        <div class="col-md-6 col-lg-4 text-start">
          <div class="links">
            <h5 class="text-light ">Quik Links</h5>
            <ul class="list-unstyled lh-lg p-0">
              <li class="nav-item me-1" v-for="link in routes.filter(route => route.label)" :key="link.name">
                <RouterLink :to="{ name: link.name }" class="nav-link text-light" active-class="active">
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <!--col-4-->
        <div class="col-md-6 col-lg-4 text-start">
          <div class="contact">
            <h5 class="text-light pb-3">Contact Us</h5>
            <p>Contact us..we are waiting for your messages to benefit people and society</p>
            <a class="btn rounded-pill w-100 bg-danger" href="">belalabdelbset@gmail.com</a>
            <!--social media links-->
            <ul class="d-flex list-unstyled mt-3 p-3">
              <li class="nav-item me-1 " v-for="social in socials.filter(social => social.icon !== undefined)"
                :key="social.name">
                <a :href="social.link" class="rounded-circle p-lg-2 social-links " :class="social.class" target="_blank"
                  rel="noopener noreferrer"> <i :class="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Start Footer -->
</template>
