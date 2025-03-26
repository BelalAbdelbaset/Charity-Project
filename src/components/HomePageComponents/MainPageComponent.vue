<script setup>
</script>

<template>
  <!--Start Landing Section-->
  <section class="landing" id="landing">
    <div class="container-fluid">
      <video autoplay muted loop id="myVideo">
        <source src="../../assets/Images/HomePage.mp4" type="video/mp4">
      </video>
      <div class="row align-items-center">
        <div class="landing-info text-center col-lg-6 col-md-6 col-sm-12">
          <h1 class="Title-text">سنتر تعليمى</h1>
          <p class="Slogan">للتفوق المستمر وتحقيق النجاح
          </p>
        </div>
        <img class="img-fluid col-lg-6 col-md-6 col-sm-12" src="../../assets/Images/HomePage1.svg" alt="">
      </div>
    </div>
  </section>
  <!--End Landing Section-->
  <!--Start grades Section-->
  <section class="grades pt-5 pb-5 bg-white" id="grades">
    <h2 class="main-title">الصفوف الدراسيه</h2>
    <div class="container pt-5">
      <!--Box 1-->
      <div class="box">
        <img class="img-fluid" src="../../assets/Images/1.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">الصف الاول الثانوى #1</h1>
          <p class="m-2 text-black-50">مواد الصف الأول الثانوى</p>
          <div class="more-btn border-top mb-2 p-3 d-flex justify-content-between align-items-center ">
            <a class="fs-5" href="#">عرض المواد</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
      <!--Box 2-->
      <div class="box ">
        <img class="img-fluid " src="../../assets/Images/2.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">الصف الثانى الثانوى #2</h1>
          <p class="m-2 text-black-50">مواد الصف الثانى الثانوى</p>
          <div class="more-btn border-top mb-2 p-3 d-flex justify-content-between align-items-center ">
            <a class="fs-5" href="#">عرض المواد</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
      <!--Box 3-->
      <div class="box ">
        <img class="img-fluid " src="../../assets/Images/3.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">الصف الثالث الثانوى #3</h1>
          <p class="m-2 text-black-50">مواد الصف الثالث الثانوى</p>
          <div class="more-btn border-top mb-2 p-3 d-flex justify-content-between align-items-center ">
            <a class="fs-5" href="#">عرض المواد</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End grades Section-->
  <!-- Start courses -->
  <div class="courses pt-5 pb-5 bg-white" id="courses">
    <h2 class="main-title">المواد التعليميه</h2>
    <div class="container pt-5">
      <!--Box 1-->
      <div class="box">
        <img class="img-fluid" src="../../assets/Images/box-1.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">اللغه العربيه</h1>
          <p class="m-2 text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil illo. At
            sed, similique quasi ipsa nobis atque commodi laboriosam.</p>
        </div>
      </div>
      <!--Box 2-->
      <div class="box ">
        <img class="img-fluid " src="../../assets/Images/box-1.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">الفيزياء</h1>
          <p class="m-2 text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi! Numquam
            corporis culpa ullam natus quam omnis, dolorum quisquam </p>
        </div>
      </div>
      <!--Box 3-->
      <div class="box ">
        <img class="img-fluid " src="../../assets/Images/box-1.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">الأحياء</h1>
          <p class="m-2 text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi! Numquam
            corporis culpa ullam natus quam omnis, dolorum quisquam </p>
        </div>
      </div>
      <!--Box 4-->
      <div class="box ">
        <img class="img-fluid " src="../../assets/Images/coming-soon.jpg" alt="">
        <div class="box-info p-2">
          <h1 class="fs-4 m-2 fw-bold">اللغه الفرنسيه</h1>
          <p class="m-2 text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, modi! Numquam
            corporis culpa ullam natus quam omnis, dolorum quisquam </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End courses -->
</template>
