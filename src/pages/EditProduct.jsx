import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../redux/productSlice";
import ProductForm from "../components/ProductForm";


function EditProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.products.allProducts.find((item) => item.id === Number(id)));
    if (!product) {
        return (
            <h2 className="text-center">Product not found</h2>
        );
    }
    const handleUpdate = (data) => {
        dispatch(updateProduct({ ...data, id: product.id }));
        navigate("/");
    };
    return (
        <div className="container">
            <h2 className="mb-4">Edit Product</h2>
            <ProductForm initialData={product} onSubmit={handleUpdate}/>
        </div>
    );
}

export default EditProduct;