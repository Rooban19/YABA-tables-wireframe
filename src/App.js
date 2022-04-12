import './App.css';
import Income from './screens/Income';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Income />} />
      </Routes>
    </Router>
  );
}

export default App;
