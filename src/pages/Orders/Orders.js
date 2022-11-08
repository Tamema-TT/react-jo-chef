import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import emptyCart from '../../assets/images/empty-cart.png';
import Order from './Order';

const Orders = ({navStyle}) => {
    const allOrders = useSelector((state) => state.orderReducer.orders); //Get all orders
    //Calculate subtotal
    const [total, setTotal] = useState();
    let countTotal = 0;
    allOrders.forEach(order => {
        const oneItemTotal = order.price * order.qty;
        countTotal += oneItemTotal;
    });
    useEffect(() => {
        setTotal(countTotal.toFixed(2));
    }, [countTotal])

    return (
        <div>
            {/* Cart button */}
            <label htmlFor="cart-modal" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${navStyle ? "text-secondary" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm badge-success rounded-full indicator-item">{allOrders.length}</span>
                </div>
            </label>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            {/* Cart contents */}
            <div className="modal">
                <div className="modal-box relative font-otherNunito">
                     <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {
                        allOrders.length > 0 ?
                        allOrders.map(order =>
                            <Order
                                key={order.id}
                                order={order}
                            ></Order>)
                        :
                        <div>
                            <img className='w-3/4 mx-auto mb-4' src={emptyCart} alt="" />
                            <p className="font-bold text-lg capitalize text-center text-red-500">no orders yet</p>
                        </div>
                    }
                    {
                        allOrders.length > 0 ?
                        <div>
                            <div className='grid grid-cols-8 items-center'>
                                <p className='col-span-4 ml-auto'>Subtotal:</p>
                                <p className='lg:col-span-3 col-span-4 ml-auto'>${total}</p>
                            </div>
                            <div className='ml-auto flex justify-end mt-4 w-full'>
                                <button className='btn btn-accent w-28'>Checkout</button>
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;