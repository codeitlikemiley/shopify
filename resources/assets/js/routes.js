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
        component: Home,
        meta: {
            permission: 'admin|any'
        },
        fail: '/error'
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        meta: {
            permission: 'admin|any'
        },
        fail: '/error'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
        meta: {
            permission: 'admin|any'
        },
        fail: '/error'
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'checkout',
        meta: { requiresAuth: true, permission: 'admin|any' },
        fail: '/error'
    },
    {
        path: '/courses',
        component: Courses,
        meta: {
            permission: 'admin|any'
        },
        fail: '/error'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: { requiresAuth: true },
        fail: '/error'
    },
    {
        path: '/login',
        component: Login,
        meta: {
            permission: 'admin|any'
        },
        fail: '/error'
    },
    {
        path: '/register',
        component: Register,
        meta: {
            permission: 'any'
        },
        fail: '/error'
    },
    {
        path: '/support',
        component: Support,
        meta: {
            permission: 'any'
        },
        fail: '/error'
    },
    {
        path: '/error',
        component: NotFound,
        meta: {
            permission: 'any'
        }
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
