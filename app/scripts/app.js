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

const data = require('./../includes/data.json')

const switchLayout = function(props) {
  let ChosenLayout = {},
    mock = {}

  switch (props.layout) {
    case 'ProductReview':
      ChosenLayout = LayoutProductReview
      mock = require('../data/MockProductReview.json')
      break;
    case 'PictureIntensive':
      ChosenLayout = LayoutPictureIntensive
      mock = require('../data/MockPictureIntensive.json')
      break;
    case 'Columnist':
      ChosenLayout = LayoutColumnist
      mock = require('../data/MockColumnist.json')
      break;
    case 'PictureIntensive2':
      ChosenLayout = LayoutPictureIntensive2
      mock = require('../data/MockPictureIntensive2.json')
      break;
    case 'Lookbook':
      ChosenLayout = LayoutLookbook
      mock = require('../data/MockLookbook.json')
      break;
    case 'Feature':
      ChosenLayout = LayoutFeature
      mock = require('../data/MockFeature.json')
      break;
    case 'Short':
      ChosenLayout = LayoutShort
      mock = require('../data/MockShort.json')
      break;
    case 'ArticleTeasers':
      ChosenLayout = LayoutArticleTeasers
      mock = require('../data/MockArticleTeasers.json')
      break;
    case 'Grid':
      ChosenLayout = GridLayout
      mock = require('../data/MockFront.json')
      sticky = false
      break;
    default:
      ChosenLayout = LayoutFront
      mock = require('../data/MockFront.json')
      is_front = true
      sticky = false
  }

  color_variant = mock.color_variant
  return <ChosenLayout data={mock}/>
}

// query string parsing
let layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1)
  ? layout[1]
  : ''

// global rendering options
let color_variant = ''
let sticky = true
let is_front = false

const content = switchLayout({
  'layout': layout
})

// React root
const mountNode = document.getElementById('app')
const node = <LayoutContainer layout={layout} navbar_items={data.navbar_items} color_variant={color_variant} sticky={sticky} is_front={is_front}>{content}</LayoutContainer>

ReactDOM.render(node, mountNode)
