import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';


const routes = [
 
    {
      path:'/',
     name: 'Home',
     component: Home
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
