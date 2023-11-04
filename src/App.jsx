import Header from "./components/Header/HeaderComponent";
import HomePage from "./components/HomePage/HomePageComponent";
import "./components/Header/Header.scss";
import "./components/HomePage/HomePage.scss";

function App() {
	return (
		<div className="App">
			<Header />

			<HomePage />
		</div>
	);
}

export default App;
