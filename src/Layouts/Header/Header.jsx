import './Header.css';
import { FaSearch, FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ShoeContext } from '../../Contex/ShoesContex';
import shoes from '../../Data/Shoes.json';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const { searchInputValue, handleSearchInputChange, cartItems } = useContext(ShoeContext);
  const [isSearched, setIsSearched] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Track whether the navigation is open
  const filteredShoes = shoes.shoes.filter((shoe) => shoe.title.toLowerCase().includes(searchInputValue.toLowerCase()));

  const handleSearchInputChangeHere = (e) => {
    handleSearchInputChange(e.target.value);
    setIsSearched(!!e.target.value);
  };

  const handleDropdownButtonClick = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle the value of isNavOpen
  };

  return (
    <header>
      <Link to={'/'}>
        <div className="logoImage">Happy Feet</div>
      </Link>
      <nav className={isNavOpen ? 'open' : ''}> {/* Add the 'open' class when the navigation is open */}
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="activeLink">
              New & Featured
            </NavLink>
          </li>
          <li>
            <NavLink to="/men" activeClassName="activeLink">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" activeClassName="activeLink">
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" activeClassName="activeLink">
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="activeLink">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="searchInput">
        <FaSearch />
        <input
          type="text"
          value={searchInputValue}
          onChange={handleSearchInputChangeHere}
          placeholder="Search shoes"
        />
        <FaHeart />
        <Link to="/cart">
          <p style={{ position: 'absolute', top: 0, right: 0 }}>{cartItems.length}</p>
          <FaShoppingBag />
        </Link>
        {isSearched && (
          <div className="dropDownShoes" style={{ display: 'block' }}>
            {filteredShoes.map((shoe) => (
              <Link to={`/${shoe.id}`}>
               <div className="searchItemShoe" key={shoe.title}>
                {shoe.title}
                <img src={shoe.image} alt="" />
              </div>
              </Link>
             
            ))}
          </div>
        )}
      </div>
      <div className="dropdownButton" onClick={handleDropdownButtonClick}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;