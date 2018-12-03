import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import client from '../src/utils/getClient'
import { Provider } from 'unstated'
import { dataContainer } from '../src/utils/unstated'

let dc = new dataContainer()
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ApolloProvider client={client}>
          <Provider inject={[dc]}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default MyApp
