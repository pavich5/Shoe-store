// ProductListPage.jsx
import React, { useContext, useState } from 'react';
import './ProductList.css';
import shoes from '../../Data/Shoes.json';
import { ShoeContext } from '../../Contex/ShoesContex';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const ProductListPage = () => {
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
  const [showFilters, setShowFilters] = useState(true);

  const handleToggleFilters = () => {
    console.log(showFilters);
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };
  return (
    <div
     className="ProductList">
      {showFilters ? (
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
      ) : null}
      
      <div className="shoesList">
        <div className="sortBy">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="newest">Newest</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
                    <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
          <p onClick={handleToggleFilters}>{showFilters ? 'Hide filters' : 'Show Filters'}</p>
        </div>
        <div className="AllShoes">
          {shoes.shoes
            .filter(filterShoesByPrice)
            .filter(filterShoesBySize)
            .filter(filterShoesByColor)
            .filter((shoe) => handleSearch(shoe))
            .sort(sortShoes)
            .map((shoe) => (
              <Link to={`/${shoe.id}`} key={shoe.id}>
                <motion.div className="Shoe"  
            >
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
                </motion.div>
              </Link>
            ))}
          {shoes.shoes.length === 0 ? <h1>There are no shoes</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
