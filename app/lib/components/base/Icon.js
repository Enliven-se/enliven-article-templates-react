import React from 'react'

class Icon extends React.Component {
  render() {
    if (!this.props.imageURL)
      return null;

    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'icon'

    return (
      <div className='icon-wrapper'><a href={this.props.url} title={this.props.title} className={classes}><img src={this.props.imageURL}/></a></div>
    )
  }


}

export default Icon
