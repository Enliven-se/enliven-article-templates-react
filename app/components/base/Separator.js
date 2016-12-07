import React from 'react'

class Separator extends React.Component {
  render() {
    let classes = this.props.classes ? this.props.classes : ''
    classes += ' separator'

    let space = this.props.space ? this.props.space : ' '
    return <span className={classes}>{this.props.separatorType}{space}</span>
  }


}

export default Separator
