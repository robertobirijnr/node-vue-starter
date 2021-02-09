import axiosInstance from '@/utils/axiosInstance'

export const state = {
    user:""
}

export const getters = {

}

export const actions ={
  registerUser({commit},data){
      axiosInstance.post('user/register',data)
      .then(res =>{
        commit('Register_USER',res.data)
      })
  }
}

export const mutations ={
    Register_USER(state,user){
      return  state.user = user
    }
}