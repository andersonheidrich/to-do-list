import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />;
    </BrowserRouter>
  );
}

export default App;
