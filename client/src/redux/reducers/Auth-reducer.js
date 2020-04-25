export const SET_AUTH = 'LegalQuestions/Auth-reducer/SET_AUTH'

let initialState = {
    token: null,
    userId: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
}


const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_AUTH:
     return {
       ...state,
         token: action.token,
         userId: action.userId
     }
    default:
      return state
  }
}

export const setAuth = (token, userId) => ({type: SET_AUTH, token, userId})

export default AuthReducer