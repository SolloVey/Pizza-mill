import './styles/reset.css';
// core version + navigation, pagination modules:
import Swiper, { Autoplay, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// slidesPerView: 1,
	// spaceBetween: 30,
	// slidesPerGroup: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// configure Swiper to use modules
	modules: [Pagination, Autoplay],
});
import './styles/fonts.css';
import './styles/main.scss';
