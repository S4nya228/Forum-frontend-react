import logo from './logo.svg';
import './App.css';

function App() {
    const fetchData = async () => {
    try {
        const response = await fetch('/api/test');
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={fetchData}>Fetch Data</button>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>
    </div>
    );
}

export default App;
