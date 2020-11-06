import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import empresa from '@/views/empresa.vue'


const routes = [
 
    {
      path:'/',
     name: 'Home',
     component: Home
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
