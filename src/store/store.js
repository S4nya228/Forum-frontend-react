import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlise'
import userReducer from './userSlise'
const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
})

export default store
