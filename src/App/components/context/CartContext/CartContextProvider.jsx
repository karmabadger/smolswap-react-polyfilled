import CartContext, { cartContextObj } from "./CartContext";

const CartContextProvider = ({ childrenEl, }) => {
    return (
        <CartContext.Provider value={{ cartContextObj }} children={childrenEl}></CartContext.Provider>
    );
};

export default CartContextProvider;