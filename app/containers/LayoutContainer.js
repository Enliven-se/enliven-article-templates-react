/**
 * LayoutContainer
 */
const React = window.React = require('react'),

  LayoutShort = require('../layouts/LayoutShort'),
  LayoutFeature = require('../layouts/LayoutFeature'),
  LayoutLookbook = require('../layouts/LayoutLookbook'),

  MockShort = require('../data/MockShort'),
  MockFeature = require('../data/MockFeature'),
  MockLookbook = require('../data/MockLookbook')

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
        { switchLayout({
        layout: this.props.layout
      }) }
      </div>
    )
  }
})

module.exports = LayoutContainer
