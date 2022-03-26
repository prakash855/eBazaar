import "./App.css";
import Header from "./Components/Header/Header";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
