import ReactDOM from 'react-dom';

import config from '../lib/config.js'

// React root
const mountNode = document.getElementById('app')

if (mountNode) {
    const chrome = (mountNode.className.indexOf('no-chrome') < 0)
    const node = config({chrome})
    ReactDOM.render(node, mountNode)
}
