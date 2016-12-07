// app.js
import React from 'react'
import ReactDOM from 'react-dom';

import LayoutContainer from '../containers/LayoutContainer';

const mountNode = document.getElementById('app')

let layout = location.search.match(/[&\?]layout=(\w+)/)
layout = layout && (layout.length > 1) ? layout[1] : ''

ReactDOM.render(<LayoutContainer layout={layout} />, mountNode)
