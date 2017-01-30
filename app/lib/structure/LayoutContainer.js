/**
 * LayoutContainer
 */
import React from 'react'
import NavContainer from '../containers/NavContainer'
import FooterContainer from '../containers/FooterContainer'

class LayoutContainer extends React.Component {
  render() {

    return (
      <div className='page'>
          <NavContainer {...this.props} TopicNav={this.props.is_front} />
          { this.props.children }
          <FooterContainer {...this.props}/>
      </div>
    )
  }
}

export default LayoutContainer
