import produce from 'immer';
const initialState = {
    orders: [],
};

////////////////produce ////////////////////
// Immer’s core API is very small, and the main function you’ll be working with is the produce function. produce simply takes an initial state and a callback that defines how the state should be mutated. The callback itself receives a draft (identical, but still a copy) copy of the state to which it makes all the intended update. Finally, it produces a new, immutable state with all the changes applied.
const orderReducer = produce((state = initialState, {type, payload}) => {
    switch(type) {
        case "SET_ORDER":
            const orderIndex = state.orders.findIndex(order => order.id === payload.id);
            if(orderIndex >= 0) {
                state.orders[orderIndex].qty += 1;
                return state;
            }
            else{
                const tempOrder = {...payload, qty: 1};
                return {...state, orders: [...state.orders, tempOrder] };
            }
        case "CANCEL_ORDER":
            return {...state, orders: state.orders.filter(order => order.id !== payload.id) };
        default:
            return state;
    }
})
export default orderReducer;