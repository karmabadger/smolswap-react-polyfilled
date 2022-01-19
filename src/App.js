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

import CollectionsContextProvider from 'App/components/context/CollectionsContext/CollectionsContextProvider';

import { mainnetInfo } from './configs/network/network.js'

import useNetwork from 'hooks/useNetwork';

import { useLocation } from 'react-router-dom';

// const client = new ApolloClient({
//   uri: mainnetInfo.theGraph.url,
//   cache: new InMemoryCache()
// });




const AppWithApollo = () => {
  const networkInfo = useNetwork();

  // console.log('networkInfo', networkInfo);

  const client = new ApolloClient({
    uri: networkInfo.theGraph.url,
    cache: new InMemoryCache()
  });

  // console.log('network', useLocation().pathname.split('/')[1]);

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
      <App />
    </ApolloProvider >
  );
}


function App() {
  const [network, setNetwork] = useState(mainnetInfo);
  const [themeType, setThemeType] = useLocalStorage('themeType', 'light');
  const [signer, setSigner] = useState(null);
  const networkInfo = useNetwork();

  // const client = new ApolloClient({
  //   uri: networkInfo.theGraph.url,
  //   cache: new InMemoryCache()
  // });
  return (
    // <ApolloProvider client={client} >
      <ThemeProvider theme={theme(themeType)}>
        <div className="App">
          <CartContextProvider  childrenEl={
            <NetworkContextProvider network={network} setNetwork={setNetwork} childrenEl={
              <WalletContextProvider web3Modal={web3Modal} signer={signer} setSigner={setSigner}
                childrenEl={
                  <MUIApp themeType={themeType} setThemeType={setThemeType} />
                } />
            } />
          } />
        </div>
      </ThemeProvider>
    // </ApolloProvider >
  )
}

const AppWithWallet = ({ themeType, setThemeType }) => {
  const [signer, setSigner] = useState(null);
  // const [themeType, setThemeType] = useLocalStorage('themeType', 'light');

  return (
    <WalletContextProvider web3Modal={web3Modal} signer={signer} setSigner={setSigner}
      childrenEl={
        <MUIApp themeType={themeType} setThemeType={setThemeType} />
      } />
  )
}

export default AppWithApollo;
