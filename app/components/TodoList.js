const React = window.React = require('react')

const TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>
    }
    return <ul>{this.props.items.map(createItem)}</ul>
  }
})

module.exports = TodoList
