import { setToken } from './authSlise'

const localStorageMiddleware = (store) => (next) => (action) => {
	if (action.type === 'INITIALIZE') {
		const token = localStorage.getItem('token')
		if (token) {
			store.dispatch(setToken(token))
		}
	}
	return next(action)
}

export default localStorageMiddleware
