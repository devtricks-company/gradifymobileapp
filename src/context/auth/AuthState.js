import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { gradify } from "../../axios.config";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  GET_STUDENT,
  FAILD_GET_STUDENT,
  GET_LEADER_BOARD,
  FAILD_LEADER_BOARD
} from "../types";

const AuthState = (props) => {
  const initialState = {
    leaderboards: null,
    student: null,
    isAuthenticate: false,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const getStudentLoggedIn = async (token) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await gradify.get(`/api/v1/students/getMeStudent`, config);
      console.log(res.data);
      dispatch({
        type: GET_STUDENT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILD_GET_STUDENT,
        payload: error.response.data.error,
      });
    }
  };

  const loginStudent = async (studentLoginInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await gradify.post(
        `/api/v1/students/login`,
        studentLoginInfo,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      await getStudentLoggedIn(res.data.token);
      return true;
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILD,
        payload: error.response.data.error,
      });
      return false;
    }
  };

  const getLeaderBoard = async (universityId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await gradify.get(
        `/api/v1/universities/${universityId}/students/studentLeaderboard`,
        config
      );
      dispatch({
        type:GET_LEADER_BOARD,
        payload:res.data
      })
    } catch (error) {
      dispatch({
        type:FAILD_LEADER_BOARD,
        payload:error.response.data.error
      })
    }
  };

  return (
    <AuthContext.Provider
      value={{
        student: state.student,
        isAuthenticate: state.isAuthenticate,
        loading: state.loading,
        error: state.error,
        leaderboards: state.leaderboards,
        loginStudent,
        getLeaderBoard
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
