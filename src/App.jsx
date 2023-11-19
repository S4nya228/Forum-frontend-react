import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import LoginComponent from './components/AuthComponent/LoginWindow/LoginWindow'
import RegistrationComponent from './components/AuthComponent/RegistrationWindow/RegistrationWindow'
import ForgotPassword from './components/AuthComponent/ForgotPassword/ForgotPassword'
import Menu from './components/MobileMenu/Menu'
import CreatePostPage from './components/CreatePostPage/CreatePostPage'

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
					<Route path="/create-post" element={<CreatePostPage />} />
				</Routes>
				<Menu />
			</div>
		</BrowserRouter>
	)
}

export default App
