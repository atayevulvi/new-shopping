import './App.css';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/shop';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact'element={<Contact/>}/>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
