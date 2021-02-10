<template>
    <div class="container w-full my-16 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h2 class="text-center pt-2 text-gold">Reset Password</h2>
            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
               <text-input 
               :error="errors.first('password')"
               name="password"
               type="password"
               v-validate="'required|min:6'"
               :value="form.password"
                v-model="form.password"
                placeholder="Enter new  Password"/>

                <button @click="resetPassword" class="w-full mt-3 py-4 bg-emerald-100 text-white rounded-sm focus:outline-none hover:bg-emerald-500">
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
                  password:""
              },
              error:"",
              
          }
      },
      methods:{
          resetPassword(){
             this.$validator.validate().then(isValid =>{
                 if(!isValid){
                     return
                 }
                 this.$store.dispatch('post_reset_password',{
                     ...this.form,
                     token:this.$router.params.token
                 })
                 .then(res=>{
                      this.$router.push('/')  
                    
                    
                 })
                  .catch(error =>{
                    // if (error.response && error.response.status === 400) {
                    //     const err = error.response.data.error
                    //     this.$store.commit('error', err)
                    // }
                    // let message = this.$store.state.auth.error
                    //  this.error = this.$toasted.error(message,{duration:5000})
                    //  this.form.password =""
                    })
             }) 
          },
      },    
    }
</script>

