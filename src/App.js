import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/index.js";
import BlockBox from "./components/block";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BlockBox />
        <BlockBox className="blue-block" />
      </header>
    </div>
  );
}

export default App;
