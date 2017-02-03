import Vue from "vue";
import App from "./App.vue";
import {routes} from "./route";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode:'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
