import React from 'react'
import ReactDOM from 'react-dom';

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

//import Config from '../lib/config.js'
import GridContainer from '../lib/structure/GridContainer';

// const GRAPHQL_ENDPOINT = 'http://enliven-cms.dev/en/graphql'
const GRAPHQL_ENDPOINT = 'https://cms.enliven.co/en/graphql'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_ENDPOINT}),
})

// React root
const mountNode = document.getElementById('react-app')

if (mountNode) {
    const chrome = (mountNode.className.indexOf('no-chrome') < 0)

    const url = require('url')
    const urlParams = url.parse(location.href, true)
    const layout = urlParams.query['layout']

    let navbar_items = {}

    if (chrome) {
        navbar_items = require('./../includes/data.json').navbar_items
    }

    console.log('mounting')

    ReactDOM.render(
        (
            <ApolloProvider client={client}>
                <GridContainer layout={layout} navbar_items={navbar_items} chrome={chrome} />
            </ApolloProvider>

        )
    , mountNode)
}
