import { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles';
import theme from './App/mui/theme/theme';

import MUIApp from './App/MUIApp'

import { web3Modal } from './utils/wallet/web3wallet.js';

import WalletContextProvider from './App/components/context/WalletContext/WalletContextProvider';

import CartContextProvider from './App/components/context/CartContext/CartContextProvider';

import useSessionStorage from './hooks/useSessionStorage';

function App() {
  const [signer, setSigner] = useState(null);
  // const [themeType, setThemeType] = useState('light');
  const [themeType, setThemeType] = useSessionStorage('themeType', 'light');

  return (
    <ThemeProvider theme={theme(themeType)}>
      <div className="App">
        <WalletContextProvider web3Modal={web3Modal} signer={signer} setSigner={setSigner}
          childrenEl={
            <CartContextProvider childrenEl={
              <MUIApp themeType={themeType} setThemeType={setThemeType} />
            } />
          } />
      </div>
    </ThemeProvider>
  )
}

export default App
