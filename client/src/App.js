import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './componets/Header';
import Drawer from './componets/Drawer';
import Footer from './componets/Footer';
import Users from './componets/Users';
import HelpSupport from './componets/HelpSupport';
import Home from './componets/Home';
import Offers from './componets/Offers';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Drawer />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/user' element={<Users />} exact />
          <Route path='/help' element={<HelpSupport />} exact/>
          <Route path='/offers' element={<Offers />} exact/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
