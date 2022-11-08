import React from 'react';
import homeImage from "../../assets/images/home.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div id='home' className="hero min-h-screen relative mb-4" style={{ backgroundImage: `url(${homeImage})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col text-center text-neutral-content">
                <div className="max-w-md font-otherNunito">
                    <h1 className="mb-5 text-6xl font-bold">Check Out</h1>
                    <p className="mb-5 text-3xl">Our menus</p>
                </div>
            </div>
            <div className='bg-white h-1/4 w-full absolute bottom-0 font-otherUbuntu text-secondary'>
                <p className='md:text-3xl text-2xl text-center mt-8 capitalize font-regular'>
                    <FontAwesomeIcon className='mr-4' icon={faQuoteLeft} />
                    Nothing brings people together like good foods
                    <FontAwesomeIcon className='ml-4' icon={faQuoteRight} />
                </p>
                <p className='text-xl text-center mt-8 capitalize opacity-70'>Come and enjoy with your loved ones</p>
            </div>  
        </div>
    );
};

export default Home;