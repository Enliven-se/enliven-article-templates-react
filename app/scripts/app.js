// app.js
const React = window.React = require('react'),
  ReactDOM = require('react-dom'),
  PageContainer = require('../containers/PageContainer'),
  mountNode = document.getElementById('app')

ReactDOM.render(<PageContainer />, mountNode)
