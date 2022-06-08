import "./App.css";
import Calculator from "./components/calcuator";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="TitleContainer">
          <div>
            <h1 className="Title">SPLI</h1>
            <h1 className="Title">TTER</h1>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
