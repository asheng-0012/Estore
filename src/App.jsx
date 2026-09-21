import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/edit/:id" element={<EditProduct />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;