import { useContext } from 'react';

import AlertContext from 'App/components/context/AlertContext/AlertContext';

const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
}

export default useAlertContext;