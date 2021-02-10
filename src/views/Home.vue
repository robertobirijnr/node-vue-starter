<template>
  <div class="my-32">
   <div v-if="user">
     <h1 class="text-center text-brown">fullstack nodejs and vuejs from scratch {{user.user.name}} </h1>
   </div>
   <div v-else>
      <h1 class="text-center text-brown">fullstack nodejs and vuejs from scratch </h1>
   </div>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "App",
  computed:{
    ...mapGetters({
        'user':'authUser'
      })
  }
 
};
</script>

<style></style>