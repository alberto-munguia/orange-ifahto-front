import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/core.min.css'
import './css/app.min.css'
import './css/style.min.css'
import './css/custom.min.css'

import AppRouter from './app/AppRouter'

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
)
