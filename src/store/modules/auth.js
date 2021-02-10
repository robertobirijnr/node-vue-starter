import axiosInstance from '@/utils/axiosInstance'
import { rejectError } from '@/utils/helpers'


const user = JSON.parse(localStorage.getItem('auth'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const state = {
  initialState,
  error:''
}

export const getters = {
  isAuthenticated(state){
    return !!state.initialState.user
},
authUser(state){
  return state.initialState.user || null
},
}

export const actions ={
  registerUser({commit},data){
     return axiosInstance.post('user/register',data)
      .then(res =>{
        const user = res.data
        localStorage.setItem('auth', JSON.stringify(user))
        commit('Register_USER',user)

      })
      .catch(err => rejectError(err))
  },

  loginUser({commit},userData){
    return axiosInstance.post('user/login',userData)  
  },

  logout({commit}){
        localStorage.removeItem('auth')
        commit('setAuthuser',null)
         
},
forgotPassword({commit},userData){
  return axiosInstance.post('user/forgotpassword',userData)
}
}

export const mutations = {
    Register_USER(state,user){
       state.initialState.status.loggedIn = true,
       state.initialState.user = user
    },
    setAuthuser(state,user){
            state.initialState.status.loggedIn = false,
            state.initialState.user = user
   },
   error(state, data) {
    return state.error = data
},

}