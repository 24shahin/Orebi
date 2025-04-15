import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Root from "./Component/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contacts from "./Pages/Contacts";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import MyAccount from "./Component/MyAccount";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Registration />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notfound" element={<NotFound />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
