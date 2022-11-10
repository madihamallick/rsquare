import {
  USER_ADD_FAILED,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../constants/authConstant.js'

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
        data: null,
        error: null
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        data: action.payload,
        error: null
      }
    case USER_LOGIN_FAILED:
      return {
        isAuthenticated: false,
        loading: false,
        data: null,
        error: action.payload
      }
    case USER_LOGOUT:
      return {
        isAuthenticated: false
      }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_REQUEST:
      return {
        loading: true,
        data: null,
        error: null
      }
    case USER_ADD_SUCCESS:
      return {
        loading: false,
        data: action.payload
      }
    case USER_ADD_FAILED:
      return {
        loading: false,
        data: null,
        error: action.payload
      }
    default:
      return state
  }
}
