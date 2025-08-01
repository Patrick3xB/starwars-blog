import { Link } from "react-router-dom";
import { useStore, makeKey } from "../context/StoreContext.jsx";
import DeathStar from "./icons/DeathStar";

export default function ItemCard({ type, id, name, img /*, onLearnMore*/ }) {
  const { toggleFavorite, isFav } = useStore();

  const key = makeKey(type, id);
  const fav = isFav(key);

  const handleToggle = () => {
    toggleFavorite({ key, type, id, name, img });
  };

  return (
    <div className="card h-100">
      {img && (
        <img
          src={img}
          className="card-img-top"
          alt={name}
          
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image"; }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h6 className="card-title mb-2">{name}</h6>

        <div className="mt-auto d-flex gap-2">
          
          <Link className="btn btn-sm btn-primary" to={`/${type}/${id}`}>
            Learn more!
          </Link>

          <button
            className={`btn btn-sm ${fav ? "btn-warning" : "btn-outline-warning"}`}
            onClick={handleToggle}
            aria-pressed={fav}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            title={fav ? "Remove favorite" : "Add favorite"}
          >
            <DeathStar active={fav} />
          </button>
        </div>
      </div>
    </div>
  );
}