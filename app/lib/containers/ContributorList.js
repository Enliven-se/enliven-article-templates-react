import React from 'react'

import Contributor from '../components/contributors/Contributor'

class ContributorList extends React.Component {
  render() {
    const props = this.props,
      num_items = props.data.length

    let classes = this.props.classes ? this.props.classes + ' ' : ''
    classes += 'contributor-list'
    classes += props.inline ? ' list-inline' : ' list-unstyled'

    let items = props.data.map(function(item, i) {
      let item_class = 'list-item'
      item_class += ' item-' + i

      if (i === num_items - 1) {
        item_class += ' last'
      } else if (i === 0) {
        item_class += ' first'
      }
      return (
        <li className={item_class} key={'c' + i}><Contributor {...item} className={props.classes} /></li>
      )
    })

    return <ul className={classes}>{items}</ul>
  }


}

export default ContributorList
