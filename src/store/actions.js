import { clearToken } from './authSlise'
import axiosInstance from '../api/axiosInstance'

export const logout = () => async (dispatch) => {
	try {
		await axiosInstance.post('/logout')

		dispatch(clearToken())
	} catch (error) {
		console.error('Все хуйня', error)
	}
}
