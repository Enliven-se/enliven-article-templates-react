// app.js
const React = window.React = require('react'),
  ReactDOM = require('react-dom'),
  TodoApp = require('../components/TodoApp'),
  mountNode = document.getElementById('app')

ReactDOM.render(<TodoApp />, mountNode)
