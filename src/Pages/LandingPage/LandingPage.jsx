import './LandingPage.css';
import shoe from '../../assets/shoe.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import shoes from '../../Data/Shoes.json'
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <>
     <motion.div className="LandingPage"
       initial={{ opacity: 0,}}
       animate={{ opacity: 1}}
       transition={{ duration: 1 }}>
      <div className="Text">
        <h1>Step in Style</h1>
        <h2>Discover Our Exclusive Collection</h2>
        <p>Elevate your look and experience unmatched comfort with our exquisite footwear collection. Whether it's for a run, gym session, or a fashionable outing, our shoes have you covered.</p>
        <div className="Buttons">
          <Link to={'/products'}>
          <button className="button-24">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="LandingPageImage">
        <img src={shoe} alt="Shoes" />
      </div>
    <div className="phoneLandingPage">
      <img src="https://gazellesports.com/cdn/shop/files/XC_MobileHeader_400x500_22490fdb-627c-4886-ba4b-2764c71ac136_400x@3x.jpg?v=1689699835" alt="" />
    </div>
    </motion.div>
    <div className="onSaleShoes">
      <div className="Informations">
        <h1>Shoes for Sale - 20% OFF</h1>
      </div>
      <div className="landingPageShoes">
        {shoes.shoes.filter((shoe)=> shoe.onSale === true).map((shoe) => (
          <Link to={`/${shoe.id}`} key={shoe.id}>
            <div className="Shoe">
              <div className="shoeImage">
                <img src={shoe.image} alt={shoe.title} />
              </div>
              <div className="shoeInfo">
                <h1>{shoe.title}</h1>
                <p>{shoe.colors.length} colors</p>
                <p>{shoe.category === 'male' ? `Men's Shoes` : 'Female Shoes'}</p>
                <div className="priceWrapper">
                  <p className="originalPrice">${shoe.price}</p>
                  <p className="discountedPrice">${(shoe.price * 0.8).toFixed(2)}</p>
                </div>
                <button className="addToCart">Add To Cart</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default LandingPage;
