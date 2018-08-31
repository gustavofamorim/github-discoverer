import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.scss'

import './plugins'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
