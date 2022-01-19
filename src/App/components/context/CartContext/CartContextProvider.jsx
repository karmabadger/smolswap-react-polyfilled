import CartContext, { cartContextObj, settings } from "./CartContext";

const CartContextProvider = ({ childrenEl, }) => {
    return (
        <CartContext.Provider value={{ cartContextObj, settings }} children={childrenEl}></CartContext.Provider>
    );
};

export default CartContextProvider;