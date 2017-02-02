import React from 'react'
// import ReactDOM from 'react-dom';

// containers
import GridContainer from '../lib/structure/GridContainer';

function config({
    chrome = true
}) {
    const url = require('url')
    const urlParams = url.parse(location.href, true)
    const layout = urlParams.query['layout']
    let navbar_items = {}

    if (chrome) {
        navbar_items = require('./../includes/data.json').navbar_items
    }

    return (<GridContainer layout={layout} navbar_items={navbar_items} chrome={chrome} />)
}

export default config
