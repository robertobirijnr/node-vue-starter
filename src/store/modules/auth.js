import axiosInstance from '@/utils/axiosInstance'

export const state = {
    user:"",
}

export const getters = {

}

export const actions ={
  registerUser({commit},data){
      axiosInstance.post('user/register',data)
      .then(res =>{
        commit('Register_USER',res.data)

      })
  },
  loginUser({commit},userData){
    axiosInstance.post('user/login',userData)
    .then(res=>{
      commit('Register_USER', res.data)
    })
  }
}

export const mutations ={
    Register_USER(state,user){
       state.user = user
      localStorage.setItem('user',JSON.stringify(user))
    },

}