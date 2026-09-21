import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts,searchProduct} from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const dispatch = useDispatch();
  const {loading,allProducts,error} = useSelector((state) => state.products);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  if (loading) {
    return (
      <h3 className="text-center">Loading...</h3>
    );
  }

  if (error) {
    return (
      <h3 className="text-center text-danger">{error}</h3>
    );
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className="text-center mb-4">Products</h1>
      <div className="mb-4">
        <input type="text" className="form-control" placeholder="Search product..." value={search} onChange={handleSearch}/>
      </div>
      <div className="row">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;