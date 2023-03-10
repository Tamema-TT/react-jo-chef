import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setMenus } from '../../../redux/actions/allActions';
import Item from './Item';

const Items = ({apiLink, menuType, menuArray, images}) => {
    const dispatch = useDispatch();
    
    //Fetch & set the menus
    useEffect(() => {
        dispatch(setMenus(apiLink, menuType))
        // fetch(apiLink)
        //     .then((response) => response.json())
        //     .then((data) => dispatch(setMenus(data, menuType)));
    }, [])

    //Combining menu api with unsplash api
    let completeApi = [];
    menuArray.forEach((ele, i) => {
        const image = images[i];
        completeApi[i] = {...ele, image};
    });
    
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2'>
            {
                completeApi.map((menuItem, index) => 
                    <Item
                        menuItem={menuItem}
                        key={index}
                    ></Item>)
            }
        </div>
    );
};

export default Items;