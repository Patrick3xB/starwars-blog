import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { favorites, removeFavorite } = useStore();

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand fw-bold">STAR WARS</Link>

      <div className="dropdown ms-auto">
        <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
          Favorites <span className="badge bg-secondary">{favorites.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {favorites.length === 0 && <li className="px-3 py-2 text-muted">No favorites</li>}
          {favorites.map((f) => (
            <li key={f.key} className="d-flex align-items-center px-2">
              <Link className="dropdown-item flex-grow-1" to={`/${f.type}/${f.id}`}>
                {f.name}
              </Link>
              <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeFavorite(f.key)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
