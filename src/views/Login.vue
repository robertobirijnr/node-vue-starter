<template>
    <div class="container w-full my-16 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h2 class="text-center pt-2 text-gold">Sign in</h2>
             <!-- <p hidden class="text-xs text-center text-red-700 hiden" v-if="getError">{{getError}}</p> -->
            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
               <text-input 
                :error="errors.first('email')"
               name="email" 
               type="email"
               v-validate="'required|email'"
               :value="form.email"
               v-model="form.email"
               placeholder="Enter Your Email"/>

               <text-input 
               :error="errors.first('password')"
               name="password"
               type="password"
               v-validate="'required|min:6'"
               :value="form.password"
                v-model="form.password"
                placeholder="Enter your Password"/>

                <button @click="register" class="w-full mt-3 py-4 bg-emerald-100 text-white rounded-sm focus:outline-none hover:bg-emerald-500">
                    Send
                </button>

               <div class="my-5 flex justify-end">
                    <router-link to="/auth/password/email" class="text-gold">Forgot Password ?</router-link>
               </div>
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
                  password:""
              },
              error:""
          }
      },
      methods:{
          register(){
             this.$validator.validate().then(isValid =>{
                 if(!isValid){
                     return
                 }
                 this.$store.dispatch('loginUser',this.form)
                 .then(res=>{
                     if(res.status === 200){
                        localStorage.setItem('auth', JSON.stringify(res.data))
                       this.$store.commit('Register_USER', res.data) 
                    }
                    this.$router.push('/')
                 })
                  .catch(error =>{
                    if (error.response && error.response.status === 400) {
                        const err = error.response.data.error
                        this.$store.commit('error', err)
                    }
                    let message = this.$store.state.auth.error
                     this.error = this.$toasted.error(message,{duration:5000})
                     this.form.email ="",
                     this.form.password =""
                    })
             }) 
          },
      },    
    }
</script>

