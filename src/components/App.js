import { Link, Route, Routes } from "react-router-dom";
import GuardedRoute from "../utils/GuardedRoute";
import "./../styles/App.scss";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Cart from "./Cart/Cart";
import Header from "./Header";
import Home from "./Home/Home";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route exact path="/" element={<GuardedRoute />}>
               <Route exact path="/" element={<Home />} />
            </Route>
            <Route exact path="/cart" element={<GuardedRoute />}>
               <Route exact path="/cart" element={<Cart />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
         </Routes>
      </div>
   );
}

export default App;
