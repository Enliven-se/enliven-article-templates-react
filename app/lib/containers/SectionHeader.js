import React from 'react'

import HR from '../components/base/HR'

class SectionHeader extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'section-header'

    return (
      <div className={classes}>
          <HR classes='heading-line'/>
          <h2 className='heading-text'><span className='heading-text-valign-middle'>{this.props.children}</span></h2>
      </div>
    )
  }
}

export default SectionHeader
