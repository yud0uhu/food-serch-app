<template>
  <v-main>
    <v-container>
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/78191/78191993.jpg?token=2ce2545&api=v2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/124030/124030733.jpg?token=317d117&api=v2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/118533/118533086.jpg?token=87b65c1&api=v2"
            />
          </div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
      <a
        href="https://script.google.com/macros/s/AKfycbyvAjqS_1QXEkxeIvZmsg7jfISeN0zHxx3_SqUrtrdDGooZ8cWA/exec#item-2"
        align="center"
      >
        <ul>
          <li>
            <a
              href="https://script.google.com/macros/s/AKfycbyvAjqS_1QXEkxeIvZmsg7jfISeN0zHxx3_SqUrtrdDGooZ8cWA/exec#item-2"
              align="center"
              ><h2>{{ m2 }}</h2></a
            >
          </li>
        </ul>
      </a>
      <!-- Slider main container -->
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/97396/97396919.jpg?token=b9fc392&api=v2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/112555/112555474.jpg?token=0fb8c7f&api=v2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/110722/110722131.jpg?token=8651af3&api=v2"
            />
          </div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
      <a
        href="https://script.google.com/macros/s/AKfycbyvAjqS_1QXEkxeIvZmsg7jfISeN0zHxx3_SqUrtrdDGooZ8cWA/exec#item-3"
        align="center"
      >
        <h2>{{ m3 }}</h2>
      </a>
      <!-- Slider main container -->
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/121044/121044951.jpg?token=4dca700&api=v2"
            />>
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/128411/128411698.jpg?token=86979a9&api=v2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/128410/128410773.jpg?token=adf29b0&api=v2"
            />
          </div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>

      <div id="app" class="Page-Btn" @click="scrollTop">
        <i class="fas fa-chevron-up Page-Btn-Icon">
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-up-short Page-Btn-Icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </i>
      </div>
    </v-container>
  </v-main>
</template>
