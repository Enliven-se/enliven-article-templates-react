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

    var props = this.props,
      items = this.props.data.map(function(item, i) {
        return <Contributor key={'c' + i} data={item} className={props.componentClasses} />
      })

    items = intersperse(items, function(i) {
      return <Separator key={'s' + i} separatorType=',' />
    })

    return <span className={this.props.componentClasses}>{items}</span>
  }
})

module.exports = ContributorList
