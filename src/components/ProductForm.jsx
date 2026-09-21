import { useState } from "react";

function ProductForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData ? initialData.title : "");
    const [price, setPrice] = useState(initialData ? initialData.price : "");
    const [image, setImage] = useState(initialData ? initialData.thumbnail : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title: title,
            price: Number(price),
            thumbnail: image
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label"> Product Name </label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label"> Image URL </label>
                <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <button className="btn btn-primary"> Save Product </button>
        </form>
    );
}

export default ProductForm;