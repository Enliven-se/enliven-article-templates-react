/**
 * PageContainer
 */
const React = window.React = require('react'),

  LayoutShortInterview = require('../layouts/LayoutShortInterview'),
  LayoutTheWayWePlay = require('../layouts/LayoutTheWayWePlay'),
  LayoutLookBook = require('../layouts/LayoutLookBook'),
  // LayoutTestLayout = require('../layouts/LayoutTestLayout'),

  MockShortInterview = require('../data/MockShortInterview'),
  MockTheWayWePlay = require('../data/MockTheWayWePlay'),
  MockLookBook = require('../data/MockLookBook')
  // MockTestLayout = require('../data/MockTestLayout')

const PageContainer = React.createClass({
  render: function() {
    const switchLayout = function(props) {
      switch (props.layout) {
        case 'LookBook':
          return <LayoutLookBook data={MockLookBook} />
        case 'TheWayWePlay':
          return <LayoutTheWayWePlay data={MockTheWayWePlay} />
        case 'ShortInterview':
        default:
          return <LayoutShortInterview data={MockShortInterview} />
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

module.exports = PageContainer
