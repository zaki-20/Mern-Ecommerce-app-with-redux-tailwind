// import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./screens/ProductDetail";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";


function App() {
  return (
    <div >

      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/register"  element={<RegisterScreen />} />
        <Route path="/login"  element={<LoginScreen />} />
        <Route path="/product/:id"  element={<ProductDetail />} />
        <Route path="/cart/:id?"  element={<CartScreen />} />

      </Routes>

    </div>
  );
}

export default App;
