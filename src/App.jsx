import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import LoginComponent from './components/AuthComponent/LoginWindow/LoginWindow'
import RegistrationComponent from './components/AuthComponent/RegistrationWindow/RegistrationWindow'
import ForgotPassword from './components/AuthComponent/ForgotPassword/ForgotPassword'

import './components/Header/Header.scss'
import './components/HomePage/HomePage.scss'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/register" element={<RegistrationComponent />} />
					<Route path="/forgot_password" element={<ForgotPassword />} />
				</Routes>
				<HomePage />
			</div>
		</BrowserRouter>
	)
}

export default App
