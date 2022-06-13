import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout.component";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
