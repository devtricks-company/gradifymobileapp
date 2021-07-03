import {
  FAILD_GET_STUDENT,
  GET_STUDENT,
  LOGIN_FAILD,
  LOGIN_SUCCESS,
  GET_LEADER_BOARD,
  FAILD_LEADER_BOARD,
 
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        student: null,
        isAuthenticate: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILD:
      return {
        ...state,
        student: null,
        isAuthenticate: false,
        loading: false,
        error: action.payload,
      };
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload.data,
        isAuthenticate: true,
        loading: false,
        error: null,
      };
    case FAILD_GET_STUDENT:
      return {
        ...state,
        student: null,
        isAuthenticate: false,
        loading: false,
        error: null,
      };

    case GET_LEADER_BOARD:
        return{
            ...state,
            leaderboards:action.payload.data,
            loading:false,
            error:null
        }  
    default:
      return state;
  }
};

export default authReducer;
