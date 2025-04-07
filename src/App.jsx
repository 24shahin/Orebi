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
        <Route path="/contacts" element={<Contacts />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
