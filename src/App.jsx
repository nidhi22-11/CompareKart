
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComparePage from './pages/ComparePage';
import NotFound from './pages/NotFound';

const App = () => {
  
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
     
    </Router>
  );
};

export default App;
