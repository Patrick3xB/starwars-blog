import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ListPage from "./pages/ListPage"
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Páginas de catálogo completas */}
        <Route path="/characters" element={<ListPage type="people" title="All Characters" />} />
        <Route path="/planets" element={<ListPage type="planets" title="All Planets" />} />
        <Route path="/vehicles" element={<ListPage type="vehicles" title="All Vehicles" />} />

        {/* Detalles */}
        <Route path="/people/:id" element={<Detail type="people" />} />
        <Route path="/planets/:id" element={<Detail type="planets" />} />
        <Route path="/vehicles/:id" element={<Detail type="vehicles" />} />
      </Routes>
    </>
  );
}
