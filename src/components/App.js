import { Route, Routes } from "react-router-dom";
import "./../styles/App.scss";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
         </Routes>
      </div>
   );
}

export default App;
