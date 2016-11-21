/**
 * PageContainer
 */
const React = window.React = require('react'),

  Layout = require('../layouts/LayoutShortInterview'),
  // Layout = require('../layouts/LayoutTheWayWePlay'),
  // Layout = require('../layouts/LayoutLookBook'),
  // Layout = require('../layouts/LayoutTestLayout'),

  mock = require('../data/MockShortInterview')
  // mock = require('../data/MockTheWayWePlay')
  // mock = require('../data/MockLookBook')
  // mock = require('../data/MockTestLayout')

const PageContainer = React.createClass({
  render: function() {
    return (
      <div className='page'>
        <Layout data={mock} />
      </div>
    )
  }
})

module.exports = PageContainer
