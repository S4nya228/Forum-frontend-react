import { createSlice } from '@reduxjs/toolkit'

const userSlise = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.data
		},
		clearUser: (state) => {
			state.user = null
		},
	},
})

export const { setUser, clearUser } = userSlise.actions
export default userSlise.reducer
