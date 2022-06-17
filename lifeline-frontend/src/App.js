import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout.component";
import { UserProvider } from "./store/UserContext";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Layout />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
