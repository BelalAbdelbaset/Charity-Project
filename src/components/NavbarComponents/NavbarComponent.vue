<script setup>
import { RouterLink } from 'vue-router'
import { routes } from '@/router';
import socials from '@/router/socialmedia';
</script>

<template>
  <div class="navbar navbar-expand-lg sticky-top pt-2 mt-2" id="navbar">
    <div class="container">
      <img class="img-fluid" src="../../assets/Images/logo.png" alt="" />
      <h1 class="logo text-light text-uppercase pe-lg-4 fs-4">سنتر تعليمى</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <div class="navbar-links d-flex flex-grow-1 justify-content-between align-items-center m-2">
          <!--main links-->
          <ul class="links navbar-nav list-unstyled">
            <li class="nav-item me-1" v-for="link in routes.filter(route => route.label)" :key="link.name">
              <RouterLink :to="{ name: link.name }" class="nav-link text-light" active-class="active">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
          <!--social media links-->
          <ul class="d-flex list-unstyled mb-0">
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
</template>
