<template>
    <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="w-full h-12 border flex items-center justify-between px-6">
      <router-link to="/" class="text-gold">MERV</router-link>
      <div v-if="!user">
       <router-link class="text-brown" to="/auth/login">Sign In</router-link>
       <router-link  class="text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest border-brown rounded-full ml-3" to="/auth/register">Join now</router-link>
      </div>
      <div v-else>
       <button @click="logout"  class="text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest border-brown rounded-full" >Logout</button>
      </div>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed:{
    ...mapGetters({
        'user':'isAuthenticated'
      })
  },
  methods:{
     logout(){
       this.$store.dispatch('logout')
     }
  }
}
</script>

<style lang="scss" scoped>

</style>