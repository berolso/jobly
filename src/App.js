import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {} from "reactstrap";
import { Navigation } from "./Navigation";
import { Routes } from "./Routes";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <header className="App-header">
          <Routes />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
