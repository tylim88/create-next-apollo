import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'unstated'
import withApolloUnstated from '../src/utils/withApolloUnstated'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, stateStore } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider inject={[stateStore]}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloUnstated(MyApp)
