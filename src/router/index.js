import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import empresa from '@/views/empresa.vue'
import login from '@/views/login.vue'
import productos from '@/components/misproductos.vue'
import agregar from '@/components/agregar.vue'
import product from '@/views/productos.vue'
import EditarCategoria from '../views/categorias/EditarCategoria.vue'
import Categoria from '../views/categorias/Categoria.vue'
const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/agregar',
        name: 'agregar',
        component: agregar,
        meta: {
            requireAuth: true
        }
    },

    {
        path: '/productos',
        name: 'productos',
        component: productos,
        meta: {
            requireAuth: true
        }
    },

    {
        path: '/login',
        name: 'login',
        component: login,
    },

    {
        path: '/empresa',
        name: 'empresa',
        component: empresa,
        meta: {
            requireAuth: true
        }
    },

    {
        path: '/producto/:emp',
        name: 'producto',
        component: product

    },

    {
        path: '/categoria',
        name: 'Categoria',
        component: Categoria,
        meta: {
            requireAuth: true
        }
    },
    {
        //: los puintos son por que varian los id
        path: '/categorias/:id/edit',
        name: 'EditarCategoria',
        component: EditarCategoria,
        meta: {
            requireAuth: true
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        //la ruta requiere autenticacion de ingreso
        const token = localStorage.getItem('token');

        if (!token) {
            next('/')
        }
    }
    next()

})
export default router