import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import LightsaberNav from "./LightsaberNav";

export default function Navbar() {
  const { favorites, removeFavorite } = useStore();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
        <LightsaberNav text="STAR WARS CODEX" />
      </Link>

      <div className="ms-auto d-flex align-items-center gap-2">
        {/* Catalog dropdown */}
        <div className="dropdown">
          <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
            Catalog
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><NavLink className="dropdown-item" to="/characters">Characters</NavLink></li>
            <li><NavLink className="dropdown-item" to="/planets">Planets</NavLink></li>
            <li><NavLink className="dropdown-item" to="/vehicles">Vehicles</NavLink></li>
          </ul>
        </div>

        {/* Favorites dropdown */}
        <div className="dropdown">
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
      </div>
    </nav>
  );
}
