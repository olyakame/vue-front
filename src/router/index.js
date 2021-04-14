import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Loginpage from '@/components/Loginpage'
import Featurepage from '@/components/Featurepage'
import ContactPage from '@/components/ContactPage'
import Pricepage from '@/components/Pricepage'
import Blogpage from '@/components/Blogpage'
/* eslint-disable */
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/loginpage',
        name: 'Loginpage',
        component: Loginpage
    },
    {
        path: '/featurepage',
        name: 'Featurepage',
        component: Featurepage
    },
    {
        path: '/contact_us',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/blogpage',
        name: 'Blogpage',
        component: Blogpage
    },
    {
        path: '/pricepage',
        name: 'Pricepage',
        component: Pricepage
    },
    ]
})