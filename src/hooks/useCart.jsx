

import { useContext } from 'react';

import CartContext from 'App/components/context/CartContext/CartContext';

function useCart() {
    const context = useContext(CartContext);
    return context;
}

export default useCart;