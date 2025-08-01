import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getImageUrl } from "../services/swapi";
import { useStore } from "../context/StoreContext";

export default function Detail({ type }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useStore();

  const key = `${type}-${id}`;
  const isFav = favorites.some(f => f.key === key);

  useEffect(() => {
    let abort = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const detail = await getDetail(type, id);
        if (!abort) setData(detail);
      } catch (e) {
        if (!abort) setErr(e.message);
      } finally {
        if (!abort) setLoading(false);
      }
    })();
    return () => { abort = true; };
  }, [type, id]);

  if (err) return <div className="container my-4 alert alert-danger">{err}</div>;
  if (loading || !data) return <div className="container my-4 text-muted">Loading...</div>;

  const props = data.properties ?? {};
  const name = props.name ?? data?.properties?.title ?? "Unknown";

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-5">
          <img
            src={getImageUrl(type, id)}
            className="img-fluid rounded shadow-sm"
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image"; }}
            alt={name}
          />
        </div>
        <div className="col-md-7">
          <div className="d-flex align-items-center gap-2">
            <h2 className="mb-0">{name}</h2>
            <button
              className={`btn btn-sm ${isFav ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => toggleFavorite({ key, type, id, name })}
            >
              {isFav ? "★" : "☆"}
            </button>
          </div>

          <hr/>
          <ul className="list-unstyled">
            {Object.entries(props).map(([k, v]) => (
              <li key={k}><strong className="text-capitalize">{k}:</strong> {String(v)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
