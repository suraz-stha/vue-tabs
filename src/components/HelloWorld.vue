<template>
<div id="app">
  <div class="d-flex flex-wrap align-items-center">
      <router-link :to="{name:  'trends'}" type= "tab-bar-button" class="mr-3">Trends</router-link>
      <router-link :to="{name:  'recurring-revenue'}" type= "tab-bar-button" class="mr-3">Recurring Revenue over time</router-link>  
      <router-link :to="{name:  'opportunity'}" type= "tab-bar-button" class="mr-3">Opportunities</router-link>
      <router-link :to="{name:  'drivers'}" type= "tab-bar-button" class="mr-3">Drivers</router-link>
  </div>

 

  <hr>
  <transition name="page" mode="out-in">
  <router-view></router-view>
  </transition>



 





</div>

</template>

<script>
import Vue from "vue"
import VueRouter from "vue-router"
import Trends from "./Trends"
import RecurringRevenue from "./RecurringRevenue"
import Opportunity from "./Opportunity"
import Drivers from "./Drivers"

Vue.use(VueRouter, )

const routes = [
  {
    path: '/',
    name: 'trends',
    component: Trends
  },
   {
    path: '/recurring-revenue',
    name: 'recurring-revenue',
    component: RecurringRevenue
  },
   {
    path: '/opportunity',
    name: 'opportunity',
    component: Opportunity
  },
   {
    path: '/drivers',
    name: 'drivers',
    component: Drivers
  }
  
]
 const router = new VueRouter({
   
  routes
  
})
export default {
  name: 'HelloWorld',
  router,
  props: {
    msg: String
  },
  components: {
    // Trends,
    // RecurringRevenue,
    // Opportunity,
    // Drivers

  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#id{
  padding: 20px;
  margin: 10px;
}

.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-center, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
