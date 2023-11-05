import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/HeaderComponent";
import HomePage from "./components/HomePage/HomePageComponent";
import LoginComponent from "./components/AuthComponent/LoginWindow/LoginComponent";
import RegistrationComponent from "./components/AuthComponent/RegistrationWindow/RegistrationComponent";
import ForgotPassword from "./components/AuthComponent/ForgotPassword/ForgotPasswordComponent";

import "./components/Header/Header.scss";
import "./components/HomePage/HomePage.scss";

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
	);
}

export default App;
