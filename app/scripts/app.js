// app.js
import React from 'react'
import ReactDOM from 'react-dom';

// containers
import LayoutContainer from '../lib/containers/LayoutContainer';

// layouts
import LayoutShort from '../lib/layouts/LayoutShort'
import LayoutFeature from '../lib/layouts/LayoutFeature'
import LayoutLookbook from '../lib/layouts/LayoutLookbook'
import LayoutPictureIntensive from '../lib/layouts/LayoutPictureIntensive'

// mock data
import MockShort from '../data/MockShort'
import MockFeature from '../data/MockFeature'
import MockLookbook from '../data/MockLookbook'
import MockPictureIntensive from '../data/MockPictureIntensive'

// hamburger menu items
const navbar_items = [{
  'title': 'Short',
  'className': 'short',
  'extra_classes': [''],
  'url': '/?layout=Short'
}, {
  'title': 'Lookbook',
  'className': 'lookbook',
  'extra_classes': [''],
  'url': '/?layout=Lookbook'
}, {
  'title': 'Feature',
  'className': 'feature',
  'extra_classes': [''],
  'url': '/?layout=Feature'
}, {
  'title': 'Picture Intensive',
  'className': 'PictureIntensive',
  'extra_classes': [''],
  'url': '/?layout=PictureIntensive'
}]

const switchLayout = function(props) {
  switch (props.layout) {
    case 'PictureIntensive':
      color_variant = MockPictureIntensive.color_variant
      return <LayoutPictureIntensive data={MockPictureIntensive} />
    case 'Lookbook':
      color_variant = MockLookbook.color_variant
      return <LayoutLookbook data={MockLookbook} />
    case 'Feature':
      color_variant = MockFeature.color_variant
      return <LayoutFeature data={MockFeature} />
    case 'Short':
    default:
      color_variant = MockShort.color_variant
      return <LayoutShort data={MockShort} />
  }
}

// React root
const mountNode = document.getElementById('app')

// query string parsing
let layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1) ? layout[1] : ''

// global rendering options
let color_variant = ''

const content = switchLayout({ 'layout': layout })

ReactDOM.render(
<LayoutContainer layout={layout} navbar_items={navbar_items} color_variant={color_variant}>
    { content }
</LayoutContainer>,
mountNode)
