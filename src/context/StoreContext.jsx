import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext();

export const makeKey = (type, id) => `${type}-${Number(id)}`;

export function StoreProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favorites")) ?? []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    setFavorites((prev) => prev.some(f => f.key === item.key) ? prev : [...prev, item]);
  };

  const removeFavorite = (key) => {
    setFavorites((prev) => prev.filter(f => f.key !== key));
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.some(f => f.key === item.key)
        ? prev.filter(f => f.key !== item.key)
        : [...prev, item]
    );
  };

  
  const isFav = (key) => favorites.some(f => f.key === key);

  const value = useMemo(() => ({
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFav, 
  }), [favorites]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);