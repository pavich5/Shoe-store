import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import ProductListPage from './ProductListPage/ProductList';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import CartPage from './CartPage/CartPage';
import MenShoesPage from './MenShoesPage/MenShoesPage';
import WomenShoesPage from './WomenShoesPage/WomenShoesPage';
import KidsShoesPage from './KidsShoesPage/KidsShoesPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
const Pages = () => {
  return (
    <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/products'  element={<ProductListPage/>}/>
        <Route path='/:id'  element={<ProductDetailsPage/>}/>
        <Route path='/cart'  element={<CartPage/>}/>
        <Route path='/men'  element={<MenShoesPage/>}/>
        <Route path='/women'  element={<WomenShoesPage/>}/>
        <Route path='/kids'  element={<KidsShoesPage/>}/>
        <Route path='/about'  element={<AboutUsPage/>}/>

    </Routes>
  )
}

export default Pages