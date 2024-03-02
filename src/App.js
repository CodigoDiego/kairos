import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { Properties } from './components/pages/Properties';
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Faqs } from './components/pages/Faqs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
      </Routes>
    </div>
  );
}

export default App;
