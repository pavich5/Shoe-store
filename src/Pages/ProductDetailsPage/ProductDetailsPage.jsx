import React, { useContext, useEffect, useState } from 'react';
import './ProductDetailsPage.css';
import { useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import shoes from '../../Data/Shoes.json';
import { ShoeContext } from '../../Contex/ShoesContex';

const ProductDetailsPage = () => {
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [buttonClicked, setButtonClicked] = useState(false); // New state for tracking button click

    const { id: shoeID } = useParams();
    const { addToCart } = useContext(ShoeContext);

    useEffect(() => {
        const selectedShoeData = shoes.shoes.find((shoe) => shoe.id === parseInt(shoeID));
        setSelectedShoe(selectedShoeData);
        console.log(selectedShoe);
    }, [shoeID]);

    if (!selectedShoe) {
        return <div>Loading...</div>;
    }

    const addFinalProductToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select a color and size before adding to the cart.');
            return;
        }

        const finalProduct = {
            ...selectedShoe,
            selectedSize: selectedSize,
            selectedColor: selectedColor,
        };

        addToCart(finalProduct);
        setButtonClicked(true); // Set the buttonClicked state to true after clicking

    };

    return (
        <motion.div className="ProductDetailsPage"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1}}
        transition={{ duration: 1.1 }}>
            <div className="ProductDetaislImage">
                <img src={selectedShoe.image} alt="" />
            </div>
            <div className="details">
                <h1>{selectedShoe.title}</h1>
                <p>{selectedShoe.category === 'female' ? 'Female Shoes' : 'Men Shoes'}</p>
                <p>${selectedShoe.price}</p>
                <p style={{ fontSize: '15px' }} className='description'>Description:<br /><span>{selectedShoe.description}</span></p>
                <div className="colors">
                    <ul>
                        {selectedShoe.colors.map((color, index) => (
                            <li key={index} onClick={() => setSelectedColor(color)} className={selectedColor === color ? 'selectedColor' :  null}>{color}</li>
                        ))}
                    </ul>
                </div>

                <div className="Sizes">
                    <ul>
                        {selectedShoe.sizes.map((size, index) => (
                            <li key={index} onClick={() => setSelectedSize(size)} className={selectedSize === size ? 'selectedSize' :  null}>{size}</li>
                        ))}
                    </ul>
                </div>
                <div className="button-40">
                <button onClick={addFinalProductToCart} disabled={buttonClicked}>
                    {buttonClicked ? (
                        <>
                            <FaCheck style={{ marginRight: '5px' }} /> Added to Cart
                        </>
                    ) : (
                        <>
                            Add To Cart - ${selectedShoe.price}
                        </>
                    )}
                </button>
                <p style={{ fontSize: '18px', padding: '0px', textAlign: 'center' }}>This item ships free!</p>
            </div>
            </div>
        </motion.div>
    );
};

export default ProductDetailsPage;
