import axiosInstance from '@/utils/axiosInstance'


const user = JSON.parse(localStorage.getItem('auth'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const state = {
  initialState
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
      axiosInstance.post('user/register',data)
      .then(res =>{
        const user = res.data
        localStorage.setItem('auth', JSON.stringify(user))
        commit('Register_USER',user)

      })
  },
  loginUser({commit},userData){
    axiosInstance.post('user/login',userData)
    .then(res=>{
      const user = res.data
      localStorage.setItem('auth', JSON.stringify(user))
      commit('Register_USER', user)
    })
  },
  logout({commit}){
        localStorage.removeItem('auth')
        commit('setAuthuser',null)
         
},
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

}