import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2, {
  "confirmButtonColor": "#FC0017",
  "cancelButtonColor": "#ff7674"
});

export default ({}, inject) => {
  inject('swal', Vue.swal)
}
