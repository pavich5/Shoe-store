import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
export const ShoeContext = createContext();

export const ShoeProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [shoeColor, setShoeColor] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cartItems,setCartItems] = useState([])
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchInputChange = (searchInputValue) => {
    setSearchInputValue(searchInputValue);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSizeChange = (e) => {
    setShoeSize(e.target.value);
  };

  const handleColorChange = (color) => {
    setShoeColor(color);
  };

  const handleSearch = (shoe) => {
    if (!searchInputValue) {
      return true;
    }
    return shoe.title.toLowerCase().includes(searchInputValue.toLowerCase());
  };
  const sortShoes = (a, b) => {
    if (sortBy === 'newest') {
      return b.title.localeCompare(a.title);
    } else if (sortBy === 'priceLow') {
      return a.price - b.price;
    } else if (sortBy === 'priceHigh') {
      return b.price - a.price;
    } else {
      return 0;
    }
  };

  const filterShoesByPrice = (shoe) => {
    if (!priceRange) {
      return true;
    }
    const [minPrice, maxPrice] = priceRange.split('-');
    return shoe.price >= Number(minPrice) && shoe.price <= Number(maxPrice);
  };

  const filterShoesBySize = (shoe) => {
    if (!shoeSize) {
      return true;
    }
    return shoe.sizes.includes(Number(shoeSize));
  };

  const filterShoesByColor = (shoe) => {
    if (!shoeColor) {
      return true;
    }
    return shoe.colors.includes(shoeColor);
  };

  const addToCart = (shoe) => {
      setCartItems([...cartItems,shoe])
      console.log(cartItems);
  }
  const removeFromCart = shoeid => {
    setCartItems(cartItems.filter((shoe) => shoe.id !== shoeid))
  }
  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    if (cartItemsFromLocalStorage) {
      setCartItems(JSON.parse(cartItemsFromLocalStorage));
    }
  }, []);

  // Save cart items to local storage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <ShoeContext.Provider
      value={{
        sortBy,
        handleSortChange,
        priceRange,
        handlePriceRangeChange,
        shoeSize,
        handleSizeChange,
        shoeColor,
        handleColorChange,
        searchInputValue,
        handleSearchInputChange,
        sortShoes,
        filterShoesByPrice,
        filterShoesBySize,
        filterShoesByColor,
        handleSearch,
        addToCart,
        cartItems,
        removeFromCart
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
};
