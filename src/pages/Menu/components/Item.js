import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrders } from '../../../redux/actions/allActions';

const Item = ({menuItem}) => {
    //Display item details on hover
    const [display, setDisplay] = useState(false);
    const { name, dsc, price, image } = menuItem;
    const dispatch = useDispatch();

    return (
        <div className='hover:bg-stone-700 relative h-80 transition duration-1000 ease-in-out font-otherNunito font-medium' onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            {
                image.urls.small ?
                <figure >
                    <img className='absolute object-cover w-full h-full mix-blend-overlay' src={image.urls.small} alt="" />
                </figure>
                :
                <button type="button" className="bg-indigo-500" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>
            }
            <div className={`border m-4 p-4 flex flex-col justify-center h-72  ${
                display? "": "hidden"
            }`}>
                <h1 className='text-white text-2xl font-medium'>{name}</h1>
                <h1 className='text-white text-sm font-medium'>{dsc}</h1>
                <div className='flex items-center justify-between mt-8'>
                    <h1 className='text-white text-l font-medium'>${price}</h1>
                    {/* Add to cart */}
                    <button className='btn btn-accent pointer z-40' onClick={() => dispatch(setOrders(menuItem))} >Order</button>
                </div>
            </div>
        </div>
    );
};

export default Item;