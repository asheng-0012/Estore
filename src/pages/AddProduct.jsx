import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/productSlice";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (product) => {
    dispatch(addProduct({ ...product, id: Date.now() }));
    navigate("/");
  };
  return (
    <>
    <Navbar />
    <div className="container">
      <h2 className="mb-4">Add Product</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
    </>
  );
}

export default AddProduct;