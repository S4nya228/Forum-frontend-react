import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlise'
import userReducer from './userSlise'
import localStorageMiddleware from './localStorageMiddleware'

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store
