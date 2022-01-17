import { useState } from 'react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { ThemeProvider } from '@mui/material/styles';
import theme from './App/mui/theme/theme';

import MUIApp from './App/MUIApp'

import { web3Modal } from './utils/wallet/web3wallet.js';

import WalletContextProvider from './App/components/context/WalletContext/WalletContextProvider';

import CartContextProvider from './App/components/context/CartContext/CartContextProvider';

import useLocalStorage from './hooks/useLocalStorage';

import NetworkContextProvider from './App/components/context/NetworkContext/NetworkContextProvider'

import { mainnetInfo } from './configs/network/network.js'

import useNetwork from 'hooks/useNetwork';

// const client = new ApolloClient({
//   uri: mainnetInfo.theGraph.url,
//   cache: new InMemoryCache()
// });

function App() {
  const [signer, setSigner] = useState(null);
  const [themeType, setThemeType] = useLocalStorage('themeType', 'light');
  const [network, setNetwork] = useState(mainnetInfo);

  return (
    <ThemeProvider theme={theme(themeType)}>
      <div className="App">
        <WalletContextProvider web3Modal={web3Modal} signer={signer} setSigner={setSigner}
          childrenEl={
            <CartContextProvider childrenEl={
              <NetworkContextProvider network={network} setNetwork={setNetwork} childrenEl={
                <AppWithApollo themeType={themeType} setThemeType={setThemeType} />
              } />
            } />
          } />
      </div>
    </ThemeProvider>
  )
}


const AppWithApollo = ({ themeType, setThemeType }) => {
  const [network, setNetwork] = useNetwork();

  // console.log('network', network.theGraph.url);

  const client = new ApolloClient({
    uri: network.theGraph.url,
    cache: new InMemoryCache()
  });

  // client.query({
  //   query: gql`
  //     query getCollections {
  //     collections(orderBy: name) {
  //       address
  //       name
  //     }
  //   }`
  // }).then(res => {
  //   console.log('resclient', res);
  // });

  return (
    <ApolloProvider client={client} >
      <MUIApp themeType={themeType} setThemeType={setThemeType} />
    </ApolloProvider >
  );
}

export default App;
