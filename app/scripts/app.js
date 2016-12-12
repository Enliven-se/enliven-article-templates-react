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

// mock data
import MockFront from '../data/MockFront'
import MockShort from '../data/MockShort'
import MockFeature from '../data/MockFeature'
import MockLookbook from '../data/MockLookbook'
import MockPictureIntensive from '../data/MockPictureIntensive'

const data = require('./../includes/data.json')

const switchLayout = function(props) {
    let ChosenLayout = {}, mock = {}

    switch (props.layout) {
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
            mock = {}
            break;
        default:
            ChosenLayout = LayoutFront
            mock = MockFront
    }

    color_variant = mock.color_variant
    return <ChosenLayout data={mock}/>
}

// React root
const mountNode = document.getElementById('app')

// query string parsing
let layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1)
    ? layout[1]
    : ''

// global rendering options
let color_variant = ''

const content = switchLayout({'layout': layout})

ReactDOM.render(
    <LayoutContainer layout={layout} navbar_items={data.navbar_items} color_variant={color_variant}>
    {content}
</LayoutContainer>, mountNode)
