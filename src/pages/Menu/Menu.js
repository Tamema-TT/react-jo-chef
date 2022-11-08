import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setImages } from '../../redux/actions/allActions';
import Items from './components/Items';

const Menu = () => {
    const pizzas = useSelector((state) => state.menuReducer.pizzas); //get pizzas from store
    const desserts = useSelector((state) => state.menuReducer.desserts); //get desserts from store
    const beverages = useSelector((state) => state.menuReducer.beverages); //get desserts from store
    const pizzaImages = useSelector((state) => state.imageReducer.pizzaImages); //get pizza images from store
    const dessertImages = useSelector((state) => state.imageReducer.dessertImages); //get dessert images from store
    const beverageImages = useSelector((state) => state.imageReducer.beverageImages); //get pizza images from store
    const dispatch = useDispatch();
    //Fetch & set the pizza images
    useEffect(() => {
        fetch(`https://api.unsplash.com/collections/sedSVbYSC9M/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            .then((response) => response.json())
            .then((data) => dispatch(setImages(data, "SET_PIZZA_IMAGES"))); 
    }, [])
    //Fetch & set the dessert images
    useEffect(() => {
        fetch(`https://api.unsplash.com/collections/yZu8XI6DAv8/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            .then((response) => response.json())
            .then((data) => dispatch(setImages(data, "SET_DESSERT_IMAGES")));
    }, [])
    //Fetch & set the beverage images
    useEffect(() => {
        fetch(`https://api.unsplash.com/collections/PSwF71sOfaI/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            .then((response) => response.json())
            .then((data) => dispatch(setImages(data, "SET_BEVERAGE_IMAGES"))); 
    }, [])
    return (
        <div id='menu' className='z-40'>
            <h1 className='text-center text-5xl font-bold font-menuHead text-primary-focus mb-8'>Pizzas</h1>
            {/* Show pizza menu */}
            <Items
                apiLink = {`https://ig-food-menus.herokuapp.com/pizzas?_limit=4`}
                menuType = "SET_PIZZAS"
                menuArray = {pizzas}
                images = {pizzaImages}
            ></Items>
            <h1 className='text-center text-5xl font-bold font-menuHead my-8 text-primary-focus'>Desserts</h1>
            {/* Show dessert menu */}
            <Items
                apiLink={`https://ig-food-menus.herokuapp.com/desserts?_limit=8`}
                menuType = "SET_DESSERTS"
                menuArray = {desserts}
                images = {dessertImages}
            ></Items>
            <h1 className='text-center text-5xl font-bold font-menuHead my-8 text-primary-focus'>Beverages</h1>
            {/* Show beverage menu */}
            <Items
                apiLink={`https://ig-food-menus.herokuapp.com/drinks?_limit=6`}
                menuType = "SET_BEVERAGES"
                menuArray = {beverages}
                images = {beverageImages}
            ></Items>
        </div>
    );
};

export default Menu;