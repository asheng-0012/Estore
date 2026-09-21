import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
      <div className="container">

        <Link className="navbar-brand" to="/"> EStore</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/"> Home </Link>
          <Link className="nav-link" to="/add">Add Product</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;