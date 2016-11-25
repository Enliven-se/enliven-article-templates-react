import React from 'react'

const DatePublished = React.createClass({
  render: function() {
    return (
      <div className='date-published-wrapper'>
            <div className={this.props.componentClasses}>{this.props.content}</div>
        </div>
    )
  }
})

module.exports = DatePublished
