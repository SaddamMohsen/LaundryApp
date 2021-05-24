import * as AuthActions from "../actions/auth.actions";
import { signin, logout } from "../../utils/auth";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { loaded: true, user ,isAuthenticated:true }
  : { loaded: false, error: "" ,isAuthenticated:false};
 

/*const initialState = {
  user,
  loaded: true,
  error: "",
  confirmationResult: null
}*/

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return {
        error: "",
        loaded: false,
        isAuthenticated:false,
        user:null,
      };

    case AuthActions.LOGIN_SUCCESS:
      //console.log("in login success"+action)
      return {
        user: action.user,
        error: "",
        loaded: true,
        isAuthenticated:true
      };

    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
        loaded: false,
        isAuthenticated:false,
      };

    case AuthActions.LOGOUT.REQUEST:
      return {
        ...state,
        
      };

    case AuthActions.LOGOUT:
      return {
        ...state,
        isAuthenticated:false,
      };

    case AuthActions.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

//login
export const login = (email, password) => {
  return (dispatch) => {
    dispatch(request({ email, password }));
    signin(email, password).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.message));
      }
    );
  };
};

function request(user) {
  return { type: AuthActions.LOGIN_REQUEST, user };
}
function success(user) {
  return { type: AuthActions.LOGIN_SUCCESS, user };
}
function failure(error) {
  return { type: AuthActions.LOGIN_FAILURE, error };
}

export const _logout = () => {
  logout().then(
    (data) => {
      return { type: AuthActions.LOGOUT, data: data };
    },
    (error) => {
      return {
        type: AuthActions.LOGOUT_FAILURE,
        error: error.message.toString(),
      };
    }
  );
};
export default authReducer;