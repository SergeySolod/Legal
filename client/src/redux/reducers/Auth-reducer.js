export const LOGIN = 'LegalQuestions/Auth-reducer/LOGIN'
export const LOGOUT = 'LegalQuestions/Auth-reducer/LOGOUT'

let initialState = {
    token: null,
    userId: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
}


const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN:
     return {
       ...state,
         token: action.token,
         userId: action.userId
     }
      case LOGOUT:
          return {
              ...state,
              token: null,
              userId: null
          }
    default:
      return state
  }
}

export const login = (token, userId) => ({type: LOGIN, token, userId})

export default AuthReducer