const React = window.React = require('react'),
  LayoutShortInterview = require('../layouts/LayoutShortInterview'),
  LayoutTheWayWePlay = require('../layouts/LayoutTheWayWePlay'),
  LayoutLookBook = require('../layouts/LayoutLookBook'),
  LayoutTestLayout = require('../layouts/LayoutTestLayout')

const PageContainer = React.createClass({
  render: function() {
    const mock = {
      header: {
        images: [
          {
            imageURL: '/images/mock/Charlize-Theron--Capitol-Grand-Photoshoot-2015--05.jpg'
          }
        ]
      },
      body: {

      },
      footer: {

      }
    }
    return (
      <div className='page'>
          <LayoutTheWayWePlay data={mock} />
      </div>
    )
  }
})

module.exports = PageContainer
