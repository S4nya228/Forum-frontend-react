// userSlice.js

import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
		subscriptions: {},
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.data
			state.subscriptions = {}
		},
		setSubscribed: (state, action) => {
			const { groupId, isSubscribed } = action.payload
			state.subscriptions[groupId] = isSubscribed
		},
		clearUser: (state) => {
			state.user = null
			state.subscriptions = {}
		},
	},
})

export const { setUser, setSubscribed, clearUser } = userSlice.actions
export default userSlice.reducer
