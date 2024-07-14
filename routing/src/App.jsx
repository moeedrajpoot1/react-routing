import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import DefaultLayouts from "./Layouts/DefaultLayouts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayouts>
              <Home />
            </DefaultLayouts>
          }
        />
        <Route
          path="about"
          element={
            <DefaultLayouts>
              <About />
            </DefaultLayouts>
          }
        />
        <Route path="products" element={<Products />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="auth-user" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
