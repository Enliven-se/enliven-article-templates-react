/**
 * LayoutContainer
 */
import React from 'react'
const NavContainer = require('../containers/NavContainer'),
  LayoutShort = require('../layouts/LayoutShort'),
  LayoutFeature = require('../layouts/LayoutFeature'),
  LayoutLookbook = require('../layouts/LayoutLookbook'),

  MockShort = require('../data/MockShort'),
  MockFeature = require('../data/MockFeature'),
  MockLookbook = require('../data/MockLookbook')

var navbar_items = [{
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
}]

const LayoutContainer = React.createClass({
  render: function() {
    const switchLayout = function(props) {
      switch (props.layout) {
        case 'Lookbook':
          return <LayoutLookbook data={MockLookbook} />
        case 'Feature':
          return <LayoutFeature data={MockFeature} />
        case 'Short':
        default:
          return <LayoutShort data={MockShort} />
      }
    }

    return (
      <div className='page'>
         <NavContainer navbar_items={navbar_items} color_variant="white" />
         { switchLayout({
        layout: this.props.layout
      }) }
       </div>
    )
  }
})

module.exports = LayoutContainer
