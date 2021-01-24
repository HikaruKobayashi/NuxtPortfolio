import Vue from 'vue';
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome';
import { config, library }  from '@fortawesome/fontawesome-svg-core';
import { faChevronUp }      from '@fortawesome/free-solid-svg-icons';
import { faHeart }          from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

const upIcon = [faChevronUp];
const heartIcon = [faHeart];

upIcon.forEach(icon => library.add(icon));
heartIcon.forEach(icon => library.add(icon));

Vue.component('fa', FontAwesomeIcon);