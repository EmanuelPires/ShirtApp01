import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import shirtTest1 from "./pages/shirtTest1";

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={shirtTest1} />
      </div>
    </Router>
  );
}
