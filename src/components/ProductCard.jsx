import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlice";
import { Link } from "react-router-dom";


function ProductCard({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "contain" }}/>
                <div className="card-body">
                    <h5 className="card-title"> {product.title} </h5>
                    <p className="card-text"> Price: ${product.price} </p>
                    <Link to={`/edit/${product.id}`} className="btn btn-warning me-2">Edit</Link>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;