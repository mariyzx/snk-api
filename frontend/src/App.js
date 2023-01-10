import { Route, Routes  } from 'react-router-dom';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Titans from './pages/Titans';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/characters' element={ <Characters />} />
      <Route path='/titans' element={ <Titans /> } />
    </Routes>
  );
}

export default App;
