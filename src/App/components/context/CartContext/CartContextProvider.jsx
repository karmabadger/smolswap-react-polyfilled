import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";
import CartContext, { cartContextObj, settings } from "./CartContext";

const CartContextProvider = ({ childrenEl, }) => {
    const [settingsState, setSettingsState] = useLocalStorage("settings", JSON.stringify(settings));

    const setSettings = (newSettings) => {
        setSettingsState(JSON.stringify(newSettings));
    };

    const setSettingsByKey = (key, value) => {
        const newSettings = { ...settingsState };
        newSettings[key] = value;
        setSettings(newSettings);
    };

    // console.log("CartContextProvider.jsx: settingsState", settingsState);
    cartContextObj.settings = JSON.parse(settingsState);
    cartContextObj.setSettings = setSettings;
    cartContextObj.setSettingsByKey = setSettingsByKey;

    return (
        <CartContext.Provider
            value={{
                cartContextObj,
            }}
            children={childrenEl}
        >
        </CartContext.Provider>
    );
};

export default CartContextProvider;