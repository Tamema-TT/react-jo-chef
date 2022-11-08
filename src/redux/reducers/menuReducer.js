import produce from 'immer';
const initialState = {
    pizzas: [],
    desserts: [],
    beverages: [],
    pizzaImages: [],
    dessertImages: [],
    beverageImages: []
};

export const menuReducer = produce((state = initialState, {type, payload}) => {
    switch(type) {
        case "SET_PIZZAS":
            return {...state, pizzas: payload };
        case "SET_DESSERTS":
            return {...state, desserts: payload };
        case "SET_BEVERAGES":
            return {...state, beverages: payload };
        default:
            return state;
    }
})

export const imageReducer = produce((state = initialState, {type, payload}) => {
    switch(type) {
        case "SET_PIZZA_IMAGES":
            return {...state, pizzaImages: payload };
        case "SET_DESSERT_IMAGES":
            return {...state, dessertImages: payload };
        case "SET_BEVERAGE_IMAGES":
            return {...state, beverageImages: payload };
        default:
            return state;
    }
})