import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlise'

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
})

export default store
