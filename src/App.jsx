import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import LoginComponent from './components/AuthComponent/LoginWindow/LoginWindow'
import RegistrationComponent from './components/AuthComponent/RegistrationWindow/RegistrationWindow'
import ForgotPassword from './components/AuthComponent/ForgotPassword/ForgotPassword'
import Menu from './components/MobileMenu/Menu'
import CreatePostPage from './components/CreatePostPage/CreatePostPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import PostPage from './components/PostPage/PostPage'

const ProtectedRoute = ({ element, redirectTo, ...rest }) => {
	const isAuthenticated = useSelector((state) => state.auth.token)

	return isAuthenticated ? (
		element
	) : (
		<Navigate
			to={redirectTo}
			state={{ from: rest.location?.pathname || '/' }}
		/>
	)
}

ProtectedRoute.propTypes = {
	element: PropTypes.node.isRequired,
	redirectTo: PropTypes.string.isRequired,
}

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} index />
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/register" element={<RegistrationComponent />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/post" element={<PostPage />} />
					<Route
						path="/create-post"
						element={
							<CreatePostPage />
							// <ProtectedRoute
							// 	element={<CreatePostPage />}
							// 	redirectTo="/login"
							// />
						}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoute element={<ProfilePage />} redirectTo="/login" />
						}
					/>
				</Routes>
				<Menu />
			</div>
		</BrowserRouter>
	)
}

export default App
