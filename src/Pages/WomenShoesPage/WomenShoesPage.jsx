import React, { useContext } from 'react'
import { ShoeContext } from '../../Contex/ShoesContex';
import {Link} from 'react-router-dom';
import shoes from '../../Data/Shoes.json'
import { motion } from "framer-motion"

const WomenShoesPage = () => {
    const {
        sortBy,
        handleSortChange,
        priceRange,
        handlePriceRangeChange,
        shoeSize,
        handleSizeChange,
        shoeColor,
        handleColorChange,
        sortShoes,
        filterShoesByPrice,
        filterShoesBySize,
        filterShoesByColor,
        handleSearch,
        searchInputValue,
      } = useContext(ShoeContext);
    
      const womenShoes = shoes.shoes.filter((shoe) => shoe.category === 'female')
  return (
    <motion.div className="ProductList"
    initial={{ opacity: 0,}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}>
    <div className="filters">
      <div className="filterSection">
        <h2>Filters</h2>
        <div className="filterGroup">
          <h3>Color</h3>
          <ul className="colorList">
            <li className="colorItem black" title="Black" onClick={() => handleColorChange('Black')}></li>
            <li className="colorItem white" title="White" onClick={() => handleColorChange('White')}></li>
            <li className="colorItem red" title="Red" onClick={() => handleColorChange('Red')}></li>
            <li className="colorItem blue" title="Blue" onClick={() => handleColorChange('Blue')}></li>
            <li className="colorItem grey" title="Grey" onClick={() => handleColorChange('Grey')}></li>
            <li className="colorItem pink" title="Pink" onClick={() => handleColorChange('Pink')}></li>
            <li className="colorItem green" title="Green" onClick={() => handleColorChange('Green')}></li>
            <li className="colorItem orange" title="Orange" onClick={() => handleColorChange('Orange')}></li>
            <li className="colorItem purple" title="Purple" onClick={() => handleColorChange('Purple')}></li>
            <li className="colorItem yellow" title="Yellow" onClick={() => handleColorChange('Yellow')}></li>
          </ul>
        </div>
        <div className="filterGroup">
          <h3>Size</h3>
          <select value={shoeSize} onChange={handleSizeChange}>
            <option value="">All</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="filterGroup">
          <h3>Price</h3>
          <select value={priceRange} onChange={handlePriceRangeChange}>
            <option value="">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-">Above $200</option>
          </select>
        </div>
      </div>
    </div>
    <div className="shoesList">
      <div className="sortBy">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="newest">Newest</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
      <div className="AllShoes">
        {womenShoes
          .filter(filterShoesByPrice)
          .filter(filterShoesBySize)
          .filter(filterShoesByColor)
          .filter((shoe) => handleSearch(shoe))
          .sort(sortShoes)
          .map((shoe) => (
            <Link to={`/${shoe.id}`} key={shoe.id}>
              <div className="Shoe">
                <div className="shoeImage">
                  <img src={shoe.image} alt={shoe.title} />
                </div>
                <div className="shoeInfo">
                  <h1>{shoe.title}</h1>
                  <p>{shoe.colors.length} colors</p>
                  <p>{shoe.category === 'male' ? `Men's Shoes` : 'Female Shoes'}</p>
                  <p style={{ color: 'black', marginBottom: '15px' }}>${shoe.price}</p>
                  <button className="addToCart">Add To Cart</button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  </motion.div>
  )
}

export default WomenShoesPage;



