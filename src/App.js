import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Navbar } from "./components/Dashboard/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
