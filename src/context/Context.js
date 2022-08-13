import { useState, createContext } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [cartList, setCartList] = useState([]);

    const initFilter = {
        price: 'all',
        category: [],
    };

    const [filter, setFilter] = useState(initFilter);

    const totalPrice = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const addAndIncreaseCartItem = (product) => {
        const existProduct = cartList.find((item) => item.id === product.id);
        if (existProduct) {
            setCartList(
                cartList.map((item) =>
                    item.id === product.id ? { ...existProduct, quantity: product.quantity + 1 } : item,
                ),
            );
        } else {
            setCartList([...cartList, { ...product, quantity: 1 }]);
            alert('The product is added to the cart list');
        }
    };

    const decreaseAndRemoveCartItem = (product) => {
        const existProduct = cartList.find((item) => item.id === product.id);
        if (existProduct.quantity === 1) {
            setCartList(cartList.filter((item) => item.id !== product.id));
        } else {
            setCartList(
                cartList.map((item) =>
                    item.id === product.id ? { ...existProduct, quantity: product.quantity - 1 } : item,
                ),
            );
        }
    };

    const removeCartItem = (product) => {
        setCartList((prevCartList) => prevCartList.filter((item) => item.id !== product.id));
    };

    const value = {
        initFilter,
        filter,
        setFilter,
        items,
        setItems,
        cartList,
        setCartList,
        addAndIncreaseCartItem,
        decreaseAndRemoveCartItem,
        removeCartItem,
        totalPrice,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
