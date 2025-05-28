import { createContext, useContext, useState } from "react";

const BasketContext  = createContext();


export const BasketWrapper = ({ children }) => {

    const [basket, setBasket] = useState([]);

    const addOrder = (coffee, ingredients, totalPrice) => {
        const order = {
            id: Date.now(),
            coffee,
            ingredients,
            totalPrice
        };
        setBasket(prev => [...prev, order]);
    };

    return (
        <BasketContext.Provider value={{ basket, addOrder, setBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext)