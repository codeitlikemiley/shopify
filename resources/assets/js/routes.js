import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'
/* Lazy Loading Routes */
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Dashboard = () => import('./pages/Dashboard.vue')
const Courses = () => import('./pages/Courses.vue')
const Login = () => import('./pages/Login.vue')
const Register = () => import('./pages/Register.vue')
const Support = () => import('./pages/Support.vue')
const NotFound = () => import('./pages/NotFound.vue')
const Cart = () => import('./components/Cart.vue')
const Checkout = () => import('./pages/Checkout.vue')

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart'
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'checkout',
        meta: { requiresAuth: true }
    },
    {
        path: '/courses',
        component: Courses
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/support',
        component: Support
    },
    /* Default Route */
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

/* Middlewares */
router.beforeEach((to, from, next) => {
    // authenticated
    if (to.matched.some(m => m.meta.requiresAuth)) {
        return AuthService.check().then((authenticated) => {
            if (!authenticated) {
                return next({ path: '/login' })
            }
            return next()
        })
    }
    // admin
    if (to.matched.some(m => m.meta.isAdmin)) {
        return AuthService.checkIsAdmin().then(admin => {
            if (!admin) {
                return next({ path: '/dashboard' })
            }
            return next()
        })
    }

    return next()
})

export default router
