import React from 'react'

import moment from 'moment'

class DatePublished extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'date-published'

    // parse the date field using Moment.js and output using chosen format
    const date_format = this.props.date_format ? this.props.date_format : 'LL'
    let date_value = Number(this.props.value * 1000)
    date_value = moment(date_value).format(date_format);

    return (
      <div className='date-published-wrapper'>
          <div className={classes}>{date_value}</div>
      </div>
    )
  }
}

export default DatePublished
