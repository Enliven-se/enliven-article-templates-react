// app.js
import React from 'react'
import ReactDOM from 'react-dom';

// containers
import LayoutContainer from '../lib/containers/LayoutContainer';
import GridLayout from '../lib/containers/GridLayout'

// layouts
import LayoutFront from '../lib/layouts/LayoutFront'
import LayoutShort from '../lib/layouts/LayoutShort'
import LayoutFeature from '../lib/layouts/LayoutFeature'
import LayoutLookbook from '../lib/layouts/LayoutLookbook'
import LayoutPictureIntensive from '../lib/layouts/LayoutPictureIntensive'
import LayoutProductReview from '../lib/layouts/LayoutProductReview'

// mock data
import MockFront from '../data/MockFront'
import MockShort from '../data/MockShort'
import MockFeature from '../data/MockFeature'
import MockLookbook from '../data/MockLookbook'
import MockProductReview from '../data/MockProductReview'
import MockPictureIntensive from '../data/MockPictureIntensive'

const data = require('./../includes/data.json')

const switchLayout = function(props) {
    let ChosenLayout = {},
        mock = {}

    switch (props.layout) {
        case 'ProductReview':
            ChosenLayout = LayoutProductReview
            mock = MockProductReview
            break;
        case 'PictureIntensive':
            ChosenLayout = LayoutPictureIntensive
            mock = MockPictureIntensive
            break;
        case 'Lookbook':
            ChosenLayout = LayoutLookbook
            mock = MockLookbook
            break;
        case 'Feature':
            ChosenLayout = LayoutFeature
            mock = MockFeature
            break;
        case 'Short':
            ChosenLayout = LayoutShort
            mock = MockShort
            break;
        case 'Grid':
            ChosenLayout = GridLayout
            mock = MockFront
            sticky = false
            break;
        default:
            ChosenLayout = LayoutFront
            mock = MockFront
            is_front = true
            sticky = false
    }

    color_variant = mock.color_variant
    return <ChosenLayout data = {
        mock
    }
    />
}

// query string parsing
let layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1) ?
    layout[1] :
    ''

// global rendering options
let color_variant = ''
let sticky = true
let is_front = false

const content = switchLayout({
    'layout': layout
})

// React root
const mountNode = document.getElementById('app')

ReactDOM.render( <
        LayoutContainer layout = {
            layout
        }
        navbar_items = {
            data.navbar_items
        }
        color_variant = {
            color_variant
        }
        sticky = {
            sticky
        }
        is_front = {
            is_front
        }
        > {
            content
        } <
        /LayoutContainer>, mountNode)
