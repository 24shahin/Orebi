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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
