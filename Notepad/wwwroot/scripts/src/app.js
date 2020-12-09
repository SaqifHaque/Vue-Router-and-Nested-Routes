import Vue from 'vue';
import router from './router/route';
import App from './App.vue';
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})