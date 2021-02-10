<template>
    <div class="container w-full my-16 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h2 class="text-center pt-2 text-gold">Forgot Password</h2>

            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
               <text-input 
                :error="errors.first('email')"
               name="email" 
               type="email"
               v-validate="'required|email'"
               :value="form.email"
               v-model="form.email"
               placeholder="Enter Your Email"/>

                <button @click="forgotPassword" class="w-full mt-3 py-4 bg-emerald-100 text-white rounded-sm focus:outline-none hover:bg-emerald-500">
                    Get Password Reset Link
                </button>
            </div>
        </div>
    </div>
</template>

<script> 
import TextInput from '../components/TextInput.vue'
    export default {
      components: { TextInput },
      data() {
          return {
              form:{
                  email:"",
              },
              error:""
          }
      },
      methods:{
          forgotPassword(){
             this.$validator.validate().then(isValid =>{
                 if(!isValid){
                     return
                 }
                 this.$store.dispatch('forgotPassword',this.form)
                 .then(res=>{
                    if(res.status === 200){
                        this.$router.push('/')
                        
                    }
                    this.$toasted.success('password reset link sent',{duration:5000})
                 })
                 .catch(error =>{
                    if (error.response && error.response.status === 401) {
                        const err = error.response.data.error
                        this.$store.commit('error', err)
                    }
                    let message = this.$store.state.auth.error
                     this.error = this.$toasted.error(message,{duration:5000})
                 })
             }) 
          }
      }
        
    }
</script>

