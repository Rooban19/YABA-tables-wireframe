import './App.css';
import Income from './screens/Income';
import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
} from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import Drawer from './components/Drawer';
import MonthlySummary from './screens/MonthlySummary';

function App() {
  const [drawer, setdrawer] = useState(false);

  const updateDrawerState = () => {
    setdrawer(!drawer);
  };

  return (
    <div>
      <HiMenuAlt2
        size={'2em'}
        onClick={() => setdrawer(!drawer)}
        className='icon'
      />
      <Drawer drawerState={drawer} updateDrawerState={updateDrawerState} />
      <Routes>
        <Route path='/' element={<Income />} />
        <Route path='/monthlysummary' element={<MonthlySummary />} />
      </Routes>
    </div>
  );
}

export default App;
