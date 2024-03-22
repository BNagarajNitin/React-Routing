
import { Routes ,Route, Navigate} from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Image from './components/Image/Image';
import Header from './components/Router/Header';
import Profile from './components/Router/Profile';
import Help from './components/Router/Help';
import Home from './components/Router/Home';
import Product from './components/Router/Product';
import Electronic from './components/Router/Electronic';
import Jewelery from './components/Router/Jewelery';
import MensClothing from './components/Router/MensClothing';
import WomensClothing from './components/Router/WomensClothing';
import ProductDetails from './components/Router/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/profile" element={<Profile/>}>
          <Route path="" element={<Navigate to="electronics"/>}/>
          <Route path="electronics" element={<Electronic/>}/>
          <Route path="jewelery" element={<Jewelery/>}/>
          <Route path='mensclothing' element={<MensClothing/>}/>
          <Route path='womensclothing' element ={<WomensClothing/>}/>
       
        </Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
      </Routes>
 
 
    
    </div>
  );
}

export default App;
