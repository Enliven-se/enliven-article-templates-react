// app.js
import React from 'react'
import ReactDOM from 'react-dom';

// containers
import LayoutContainer from '../lib/containers/LayoutContainer';
import GridLayout from '../lib/containers/GridLayout'

// layouts
import LayoutFront from '../lib/layouts/LayoutFront'
import LayoutColumnist from '../lib/layouts/LayoutColumnist'
import LayoutShort from '../lib/layouts/LayoutShort'
import LayoutFeature from '../lib/layouts/LayoutFeature'
import LayoutLookbook from '../lib/layouts/LayoutLookbook'
import LayoutPictureIntensive from '../lib/layouts/LayoutPictureIntensive'
import LayoutPictureIntensive2 from '../lib/layouts/LayoutPictureIntensive2'
import LayoutProductReview from '../lib/layouts/LayoutProductReview'
import LayoutArticleTeasers from '../lib/layouts/LayoutArticleTeasers'

const switchLayout = function(props) {
    let ChosenLayout = {},
        mock = {}

    switch (props.layout) {
        case 'ProductReview':
            ChosenLayout = LayoutProductReview
            mock = require('../data/MockProductReview.json');
            break;
        case 'PictureIntensive':
            ChosenLayout = LayoutPictureIntensive
            mock = require('../data/MockPictureIntensive.json');
            break;
        case 'Columnist':
            ChosenLayout = LayoutColumnist
            mock = require('../data/MockColumnist.json');
            break;
        case 'PictureIntensive2':
            ChosenLayout = LayoutPictureIntensive2
            mock = require('../data/MockPictureIntensive2.json');
            break;
        case 'Lookbook':
            ChosenLayout = LayoutLookbook
            mock = require('../data/MockLookbook.json');
            break;
        case 'Feature':
            ChosenLayout = LayoutFeature
            mock = require('../data/MockFeature.json');
            break;
        case 'Short':
            ChosenLayout = LayoutShort
            mock = require('../data/MockShort.json');
            break;
        case 'ArticleTeasers':
            ChosenLayout = LayoutArticleTeasers
            mock = require('../data/MockArticleTeasers.json');
            break;
        case 'Grid':
            ChosenLayout = GridLayout
            mock = require('../data/MockFront.json');
            break;
        default:
            ChosenLayout = LayoutFront
            mock = require('../data/MockFront.json')
    }

    return (
        <LayoutContainer layout={props.layout} navbar_items={props.data.navbar_items} color_variant={mock.color_variant} sticky={!mock.is_front} is_front={!!mock.is_front}>
            <ChosenLayout data={mock}/>
        </LayoutContainer>
    )
}

function renderRoot() {
    const data = require('./../includes/data.json')

    // query string parsing
    let layout = location.search.match(/[&\?]layout=(\w+)/)
    layout = layout && (layout.length > 1)
        ? layout[1]
        : ''

    return switchLayout({'layout': layout, 'data': data})
}

// React root
const mountNode = document.getElementById('app')
const node = renderRoot()
ReactDOM.render(node, mountNode)
