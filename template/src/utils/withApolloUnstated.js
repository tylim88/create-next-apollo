import { Component } from 'react'
import { initApollo } from './initApollo'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import { stateStore } from './unstated'

export default (App) => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx) {
      const { Component, router } = ctx

      let appProps = {}

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }
      // run all graphql queries in the component tree
      // and extract the resulting data

      const apolloClient = initApollo()
      if (!process.browser) {
        // reset server state for each request
        stateStore.resetState()
        // process server state
        stateStore.initUserState({
          text:
            'this text is state from server and will not disappear if you come back from about page',
        })
        try {
          // run all graphql queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apolloClient}
              stateStore={stateStore}
            />
          )
        } catch (error) {
          // prevent apollo client graphql errors from crashing SSR
          // handle them in component via the data.error prop
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount (source? #2)
        // head side effect therefore need to be cleared manually (source? #3)
        Head.rewind() //unknown method #4
      }

      // Extract query data from Apollo store
      const apolloState = apolloClient.cache.extract()
      if (!process.browser) {
        return {
          ...appProps,
          apolloState,
          state: stateStore.state,
        }
      } else {
        return {
          ...appProps,
          apolloState,
        }
      }
    }
    constructor(props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
      // hydrate state in client
      // serverInitialState value preserve from server to client before user navigate another next/link
      // use this chance to hydrate the state
      if (process.browser) {
        stateStore.initUserState(props.state)
      }
    }
    render() {
      return (
        <App
          {...this.props}
          apolloClient={this.apolloClient}
          stateStore={stateStore}
        />
      )
    }
  }
}
