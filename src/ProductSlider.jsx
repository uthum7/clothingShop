import React from 'react';
import './ProductSlider.css';
import slider1 from './assets/slider-1.jpg';
import slider2 from './assets/slider-2.jpg';
import slider3 from './assets/slider-3.jpg';
import slider4 from './assets/slider-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



function ProductSlider() {
    return (
        <div className="arrow-container">
        <div className="productSliderM">
       
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" /> {/* Left Arrow */}
            <div className='productSlider'>
                <h6>Brand Name</h6>
                <img src={slider1} className='slider-img' alt="" />
                <p>Made In Sri Lanka</p>
                <p>Colors Are Availlable</p>
            </div>


            <div className='productSlider'>
                <h6>Brand Name</h6>
                <img src={slider2} className='slider-img' alt="" />
                <p>Made In Sri Lanka</p>
                <p>Colors Are Availlable</p>
            </div>


            
            <div className='productSlider'>
                <h6>Brand Name</h6>
                <img src={slider3} className='slider-img' alt="" />
                <p>Made In Sri Lanka</p>
                <p>Colors Are Availlable</p>
            </div>


            
            <div className='productSlider'>
                <h6>Brand Name</h6>
                <img src={slider4} className='slider-img' alt="" />
                <p>Made In Sri Lanka</p>
                <p>Colors Are Availlable</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" /> {/* Right Arrow */}
            </div>

        </div>

    );
}

export default ProductSlider
