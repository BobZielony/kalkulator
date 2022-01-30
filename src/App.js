import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <header style={{
        color: "#32CD32",
        fontSize: "50px"
      }}>Kalkulator</header>
      <Calculator />
    </div>
  );
}

export default App;
