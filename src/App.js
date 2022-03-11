import './App.css';
import MainPage from './views/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AveragePage from './views/AveragePage/AveragePage';

function App() {
  // return <MainPage></MainPage>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/average" element={<AveragePage />} />
      </Routes>
    </Router>
  );
}
export default App;
