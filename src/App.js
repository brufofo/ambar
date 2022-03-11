import './App.css';
import MainPage from './views/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpikeTemperaturePage from './views/SpikeTemperaturePage/SpikeTemperaturePage';

function App() {
  // return <MainPage></MainPage>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/average" element={<SpikeTemperaturePage />} />
      </Routes>
    </Router>
  );
}
export default App;
