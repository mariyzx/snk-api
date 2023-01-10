import { Route, Routes  } from 'react-router-dom';
import About from './pages/About';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Titans from './pages/Titans';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/characters' element={ <Characters />} />
      <Route path='/titans' element={ <Titans /> } />
      <Route path='/about' element={ <About /> } />
    </Routes>
  );
}

export default App;
