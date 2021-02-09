<template>
    <div class="container w-full my-16 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h2 class="text-center pt-2 text-gold">Sign up</h2>

            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
               <text-input 
               :error="errors.first('name')"
               name="name"
               type="text"
               v-validate="'required|min:6'"
               :value="form.name"
               v-model="form.name"
               placeholder="Enter name"/>

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
                  name:"",
                  email:"",
                  password:""
              }
          }
      },
      methods:{
          register(){
             this.$validator.validate().then(isValid =>{
                 if(!isValid){
                     return
                 }
                 this.$store.dispatch('registerUser',this.form)
                 .then(()=>{
                     this.$router.push('/')
                 })
                 .catch(err =>{
                     console.log(err)
                 })
             }) 
          }
      }
        
    }
</script>

