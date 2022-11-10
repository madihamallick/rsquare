import { combineReducers } from 'redux'
import { userInfoReducer, userRegisterReducer } from './authReducer'

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  userRegister: userRegisterReducer,
})

export default rootReducer
