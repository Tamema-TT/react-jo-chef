

export const setMenus = (menuItems, type) => {
    return {
        type: type,
        payload: menuItems
    };
};

export const setImages = (menuImages, type) => {
    return {
        type: type,
        payload: menuImages,
    };
};

export const setOrders = (orderItems) => {
    return {
        type: "SET_ORDER",
        payload: orderItems,
    };
};

export const cancelOrder = (orderItems) => {
    return {
        type: "CANCEL_ORDER",
        payload: orderItems,
    };
};