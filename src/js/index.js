import mobileNav from './modules/mobile-nav.js';
import slider from './modules/swiper.js';
import initMap from './modules/map.js';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind()

mobileNav();
slider();
initMap();


let x = await document.getElementsByClassName('marker')
console.log(x)