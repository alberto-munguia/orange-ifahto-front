import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/core.min.css'
import './css/app.min.css'
import './css/custom.min.css'

// import AppRouter from './app/AppRouter'
import Auth from './app/views/Layout/Auth'
import App from './app/views/Layout/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
