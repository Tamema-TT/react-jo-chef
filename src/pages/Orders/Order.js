import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelOrder } from '../../redux/actions/allActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons';

const Order = ({order}) => {
    const {name, price, qty, image} = order;
    const dispatch = useDispatch();

    return (
        <div className='md:grid md:grid-cols-8 flex items-center mb-4'>
            <figure className='md:block hidden'>
                <img className='mask mask-circle w-12 h-12 mx-auto' src={image.urls.thumb} alt="" />
            </figure>
            <p className='md:col-span-3 ml-2 italic'>{name}</p>
            <p className='md:col-auto ml-auto'>{qty} x </p>
            <p className='md:col-span-2 ml-auto '> ${price}</p>
            {/* Cancel order of an item */}
            <button onClick={() => dispatch(cancelOrder(order))} className='pointer text-red-600 ml-2'>
                <FontAwesomeIcon icon={faSquareMinus} />
            </button>
        </div>
    );
};

export default Order;