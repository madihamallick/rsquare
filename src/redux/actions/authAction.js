// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUserApi, registerUserApi } from "../apis/auth.js";
import {
  USER_ADD_FAILED,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/authConstant.js";

export const registerUser =
  (fname, lname, email, phoneNumber, password, id) => async (dispatch) => {
    try {
      dispatch({
        type: USER_ADD_REQUEST,
      });
      const { data } = await registerUserApi(
        fname,
        lname,
        email,
        phoneNumber,
        password,
        id
      );
      dispatch({
        type: USER_ADD_SUCCESS,
        payload: data,
      });
      Swal.fire({
        title: "Success",
        text: "You have successfully registered",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        Swal.fire({
          title: "Verify your email",
          text: "Please verify your email to continue",
          icon: "info",
          confirmButtonText: "Ok",
        });
      });
    } catch (error) {
      dispatch({
        type: USER_ADD_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

export const userLogin = (email, password) => async (dispatch) => {
  // const navigate = useNavigate();
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await loginUserApi(email, password);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    Swal.fire({
      title: "Success",
      text: "You have successfully logged in",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      // navigate('/dashboard')
    });
    document.cookie = `user=${JSON.stringify(data)}; path=/`;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    Swal.fire({
      title: "Error",
      text: error.response.data.message,
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
};

export const userLogout = () => (dispatch) => {
  window.localStorage.removeItem("userData");
  dispatch({
    type: USER_LOGOUT,
  });
};
