import React from 'react';
import  reservation  from '../../assets/images/restaurant_reservation.png';

const Booking = ({navStyle}) => {
    // Restricting dates for reservation (dates till today are disabled)
    const today = new Date();
    let tomorrow =  new Date();
    tomorrow.setDate(today.getDate() + 1);
    const minDate = tomorrow.toISOString().slice(0, 10);
    return (
        <div>
            {/* Reservation Button */}
            <label htmlFor="book-modal" className={`btn border-primary border-2 text-primary lg:mr-8 ${navStyle ? "drop-shadow-lg bg-secondary" : ""}`}>
                Book a table
            </label>
            {/* Reservation Content */}
            <input type="checkbox" id="book-modal" className="modal-toggle " />
            <div className="modal">
                <div className="card lg:card-side bg-base-100 relative rounded-none">
                    {/* Close Button */}
                    <label htmlFor="book-modal" className="btn btn-sm btn-accent btn-circle absolute right-2 top-4">✕</label>
                    <figure><img src={reservation} alt="Error"/></figure>
                    {/* Reservation form */}
                    <div className="card-body grid grid-cols-2">
                        <div className="form-control col-span-2 p-0">
                            <label className="label">
                                <span className="label-text font-otherNunito font-bold text-secondary">Your Name</span>
                            </label>
                            <input type="text" id="name" className="input shadow-lg border-b-2 border-t-0 border-x-0 input-bordered focus:outline-none focus:border-sky-300 focus:ring-sky-300" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-otherNunito font-bold text-secondary">Phone</span>
                            </label>
                            <input id="phone" type="text" className=" input shadow-xl border-b-2 border-t-0 border-x-0 input-bordered focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-otherNunito font-bold text-secondary">Email</span>
                            </label>
                            <input id="email" type="text" className="input shadow-xl border-b-2 border-t-0 border-x-0 input-bordered focus:outline-none focus:border-sky-300 focus:ring-sky-300" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-otherNunito font-bold text-secondary">Guest</span>
                            </label>
                            <input id="guest" type="text" className="input shadow-xl border-b-2 border-t-0 border-x-0 input-bordered focus:outline-none focus:border-sky-300 focus:ring-sky-300" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-otherNunito font-bold text-secondary">Date</span>
                            </label>
                            <input id="guest" type="date" min={minDate} className="input shadow-xl border-b-2 border-t-0 border-x-0 input-bordered focus:outline-none focus:border-sky-300 focus:ring-sky-300" required/>
                        </div>
                        <div className="form-control w-36 ml-auto col-span-2 mt-4">
                            <button className="btn btn-success hover:btn-info">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;