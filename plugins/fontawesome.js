import Vue from 'vue';
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome';
import { config, library }  from '@fortawesome/fontawesome-svg-core';
import { faChevronUp }      from '@fortawesome/free-solid-svg-icons';
import { faArrowRight }       from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

const upIcons = [faChevronUp];
const rightIcons = [faArrowRight];

upIcons.forEach(icon => library.add(icon));
rightIcons.forEach(icon => library.add(icon));

Vue.component('fa', FontAwesomeIcon);