import './App.css';
import Header from './Components/Header';
import {Route,Routes} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Cartpage from './Components/Cartpage';
function App() {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/cart' element={<Cartpage />}></Route>
    </Routes>

    </>
  );
}

export default App;
