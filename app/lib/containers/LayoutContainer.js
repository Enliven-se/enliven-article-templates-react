/**
 * LayoutContainer
 */
import React from 'react'
import NavContainer from '../containers/NavContainer'

class LayoutContainer extends React.Component {
  render() {

    return (
      <div className='page'>
          <NavContainer {...this.props} />
          { this.props.children}
      </div>
    )
  }
}

export default LayoutContainer
