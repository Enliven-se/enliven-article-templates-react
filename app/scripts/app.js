// app.js
const React = window.React = require('react'),
  ReactDOM = require('react-dom'),
  LayoutContainer = require('../containers/LayoutContainer'),
  mountNode = document.getElementById('app')

var layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1) ? layout[1] : ''

ReactDOM.render(<LayoutContainer layout={layout} />, mountNode)
