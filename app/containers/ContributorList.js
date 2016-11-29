import React from 'react'

const Contributor = require('../components/contributors/Contributor'),
  Separator = require('../components/base/Separator')

const ContributorList = React.createClass({
  render: function() {
    /* intersperse: Return an array with the separator interspersed between
     * each element of the input array.
     */
    function intersperse(arr, sep) {
      if (arr.length === 0) {
        return []
      }

      return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep(i), x])
      }, [arr[0]])
    }

    let props = this.props,
      classes = this.props.classes ? this.props.classes + ' ' : ''

    classes += 'list-inline'

    let items = this.props.data.map(function(item, i) {
      let item_class = 'list-item'
      item_class += ' item-' + i
      return <li className={item_class} key={'c' + i}><Contributor data={item} className={props.classes} /></li>
    })

    items = intersperse(items, function(i) {
      return <li key={'s' + i} className="no-padding">{
          props.separator ?
              <Separator separatorType={props.separator} />
          : ''
        }</li>
    })

    return <ul className={classes}>{items}</ul>
  }
})

module.exports = ContributorList
