import React from 'react';
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
<<<<<<< HEAD
import Dashboard from './containers/Dashboard/Dashboard';
import { Provider as UrqlProvider, createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';

// containers

=======
import NowWhat from './components/NowWhat';
>>>>>>> 166bb29fd090b99889a828f1017902ed388a8a25

const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

<<<<<<< HEAD
const subscriptionClient = new SubscriptionClient(
  'ws://react.eogresources.com/graphql',
  {
    reconnect: true,
    timeout: 20000,
  },
);

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

=======
>>>>>>> 166bb29fd090b99889a828f1017902ed388a8a25
const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
<<<<<<< HEAD
      <UrqlProvider value={client}>
      <Wrapper>
        <Header />
        <Dashboard />
        <ToastContainer />
      </Wrapper>
      </UrqlProvider>
=======
      <Wrapper>
        <Header />
        <NowWhat />
        <ToastContainer />
      </Wrapper>
>>>>>>> 166bb29fd090b99889a828f1017902ed388a8a25
    </Provider>
  </MuiThemeProvider>
);

export default App;
