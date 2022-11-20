import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? "http://localhost:8080/graphql" : "https://our-hosted-server/graphql",
  cache: new InMemoryCache()
})

root.render(
  <StrictMode>
<<<<<<< HEAD
    <ColorModeScript initialColorMode='light' />
    <App />
=======
    <ApolloProvider client={client} >
      <ColorModeScript />
      <App />
    </ApolloProvider>
>>>>>>> 405f0cbed84afbd77b73c322bb0fa7169841deda
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
