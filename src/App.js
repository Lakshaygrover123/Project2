import './styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
