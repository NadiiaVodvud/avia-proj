import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,

  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  loopedSlides: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
