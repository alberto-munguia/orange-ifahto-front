import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../../components/Elements/Header'
import Sidebar from '../../components/Elements/Sidebar'


import Dashboard from '../Home/Dashboard'
import OdtDetalle from '../Odt/Detalle'
import CrearOdt from '../Odt/Agregar'

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Header />

            <main>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={ Dashboard } />
                        <Route exact path="/odts/nuevo" component={ CrearOdt } />
                        <Route exact path="/odts/detalle/:id" component={ OdtDetalle } />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}

export default App
