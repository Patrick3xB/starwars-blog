import { useEffect, useState } from "react";
import { getImageUrl, getList } from "../services/swapi";
import Card from "./Card";

export default function CardList({ type, title }) {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let abort = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const list = await getList(type, 1, 12);
        if (!abort) setItems(list);
      } catch (e) {
        if (!abort) setErr(e.message);
      } finally {
        if (!abort) setLoading(false);
      }
    })();
    return () => { abort = true; };
  }, [type]);

  return (
    <section className="container my-4">
      <h2 className="mb-3">{title}</h2>
      {err && <div className="alert alert-danger">{err}</div>}
      {loading && <div className="text-muted">Loading...</div>}

      <div className="row g-3">
        {items.map(it => (
          <div key={it.uid} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card
              type={type}
              id={it.uid}
              name={it.name}
              img={getImageUrl(type, it.uid)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
