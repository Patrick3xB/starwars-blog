import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<Detail type="people" />} />
        <Route path="/planets/:id" element={<Detail type="planets" />} />
        <Route path="/vehicles/:id" element={<Detail type="vehicles" />} />
      </Routes>
    </>
  );
}