import Vue from 'vue'
import Router from 'vue-router'
import UserList from '../pages/UserList.vue'
import AddUser from '../pages/AddUser.vue'
import EditUser from '../pages/EditUser.vue'
import About from '../pages/About.vue'
import AboutMe from '../pages/AboutMe.vue'
import Contact from '../pages/Contact.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'UserList',
            component: UserList
        },
        {
            path: '/add-user',
            name: 'AddUser',
            component: AddUser
        },
        {
            path: '/edit-user/:id',
            name: 'EditUser',
            component: EditUser
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            children:[
            {
                path: '/about/aboutme',
                name: 'AboutMe',
                component: AboutMe,
            },
            {
                path: '/about/contact',
                name: 'Contact',
                component: Contact,
            },
        ]
        },
    ]
})