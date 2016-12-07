/**
 * LayoutContainer
 */
import React from 'react'
import NavContainer from '../containers/NavContainer'

class LayoutContainer extends React.Component {
  render() {

    return (
      <div className='page'>
          <NavContainer navbar_items={this.props.navbar_items} color_variant={this.props.color_variant} />
          { this.props.children}
      </div>
    )
  }
}

export default LayoutContainer
