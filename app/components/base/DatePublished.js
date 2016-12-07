import React from 'react'

class DatePublished extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'date-published'

    return (
      <div className='date-published-wrapper'>
          <div className={classes}>{this.props.content.html}</div>
        </div>
    )
  }


}

export default DatePublished
