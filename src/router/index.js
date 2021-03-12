import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import SignUp from '../views/SignUp'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router