<template>
    <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="w-full h-12 border flex items-center justify-between px-6">
      <router-link to="/" class="text-gold">MERV</router-link>
      <div>
       <router-link class="text-brown" to="/auth/login">Sign In</router-link>
       <router-link  class="text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest border-brown rounded-full ml-3" to="/auth/register">Join now</router-link>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>