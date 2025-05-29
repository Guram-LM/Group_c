import { createContext, useContext, useEffect, useState } from "react";
const BasketContext = createContext();
export const BasketWrapper = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [currency, setCurrency] = useState("gel");
  const [dolarich, setDilarichi] = useState(null);
  const addOrder = (coffee, ingredients, totalPrice) => {
    const order = {
      id: Date.now(),
      coffee,
      ingredients,
      totalPrice,
    };
    setBasket((prev) => [...prev, order]);
  };
//   თუ ავფეთქდით თამუნა ეს მოშალე
  useEffect(() => {
    if (currency === "usd") {
      fetch("https://bankofgeorgia.ge/api/currencies/convert/USD/GEL?amountFrom=1")
        .then((res) => res.json())
        .then((data) => {
          const rate = data.data?.rate || data.rate || 2.7;
          setDilarichi(rate);
        })
        .catch((err) => {
          console.error("კონვერტირება შეუძლებელია:", err);
          setDilarichi(2.7);
        });
    }
  }, [currency]);
  //   თუ ავფეთქდით თამუნა ეს მოშალე
  return (
    <BasketContext.Provider
      value={{ basket, setBasket, addOrder, currency, setCurrency, dolarich }}>
      {children}
    </BasketContext.Provider>
  );
};
export const useBasket = () => useContext(BasketContext);