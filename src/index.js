import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import GlobalCovidSummary from './components/covidGlobalSummary/covid-global-summary';

const client = new ApolloClient({
  uri: 'http://localhost:80/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <GlobalCovidSummary/>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
