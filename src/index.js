import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
