import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//Get User from localStorage
const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userData'))

const initialState = {
  userInfo: {
    loading: false,
    error: null,
    data: userInfoFromLocalStorage
  }
}

const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
