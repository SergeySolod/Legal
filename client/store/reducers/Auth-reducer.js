import { AuthApi } from "../../api/AuthApi";

export const LOGIN = "LegalQuestions/Auth-reducer/LOGIN";
export const LOGOUT = "LegalQuestions/Auth-reducer/LOGOUT";

let initialState = {
  token: null,
  userId: null,
  isAuthenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const login = (token, userId) => ({ type: LOGIN, token, userId });
export const logout = () => ({ type: LOGOUT });

export const setLoginThunk = (formData) => async (dispatch, getState) => {
  let data = await AuthApi.login(formData);
  if (data.token) {
    dispatch(login(data.token, data.userId));
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: data.token,
        userId: data.userId,
      })
    );
  }
};

export const setRegisterThunk = (formData) => async (dispatch, getState) => {
  let data = await AuthApi.register(formData);
};

export default AuthReducer;
