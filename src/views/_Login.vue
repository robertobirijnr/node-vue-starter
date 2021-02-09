<template>
    <div class="container w-full my-16 mx-auto">
        <div class="max-w-xs mx-auto h-12">
            <h2 class="text-center pt-2 text-gold">Sign in</h2>

            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
                
                <input type="text" class="w-full text-xs focus:outline-none bg-brown-lightest text-brown p-3 mb-3" placeholder="Enter Your Email">
                <input type="text" class="w-full text-xs focus:outline-none bg-brown-lightest text-brown p-3" placeholder="Enter Your Password">

                <button class="w-full mt-3 py-4 bg-emerald-100 text-white rounded-sm focus:outline-none hover:bg-emerald-500">
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        data() {
            return {
                form:{
                    name:"",
                    password:""
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>