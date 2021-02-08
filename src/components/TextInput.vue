<template>
   <div class="mb-3">
     <input 
     :value="value"
     type="text"
     :name="name"
     @focus="$emit('focus')"
     @blur="$emit('blur')"
     @change="$emit('input', $event.target.value)"
     @input="$emit('input', $event.target.value)"
     class="w-full text-xs focus:outline-none bg-brown-lightest text-brown p-3" 
     :placeholder="placeholder">

     <span v-if="error" class="text-xs text-red-600">{{error}}</span>
   </div>
</template>

<script>
    export default {
        props:{
            placeholder:{
                type:String,
                required:true
            },
            type:{
                type:String,
                required:false,
                default:'text'
            },
            value:{
                type:String,
                required:false,
                default:""
            },
            name:{
                type:String,
                required:true
            },
            error:{
                type:String,
                required:false
            }
        }
    }
</script>
