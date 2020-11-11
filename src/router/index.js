import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import empresa from '@/views/empresa.vue'
import login from '@/views/login.vue'
import productos from '@/components/misproductos.vue'
import agregar from '@/components/agregar.vue'

const routes = [
 
    {
      path:'/',
     name: 'Home',
     component: Home
    },

    {
      path:'/agregar',
      name: 'agregar',
      component: agregar,
      meta:{
        requireAuth: true 
      } 
   },

    {
      path:'/productos',
     name: 'productos',
     component: productos,
     meta:{
      requireAuth: true 
    } 
    },

    {
      path:'/login',
     name: 'login',
     component: login,
    },

    {
      path:'/empresa',
     name: 'empresa',
     component: empresa
    },

  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requireAuth)){
    //la ruta requiere autenticacion de ingreso
    const token = localStorage.getItem('token');
    
    if(!token){
      next('/')
    }
  }
  next()

})
export default router
