import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// import Header from '../../components/Elements/Header'
// import Sidebar from '../../components/Elements/Sidebar'
import Dashboard from '../../components/App/Dashboard'
import Detalle from '../../components/Odts/Detalle'

const App = () => {
    return (
        <Router>
            <main>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={ Dashboard } />
                        <Route exact path="/detalle" component={ Detalle } />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}

export default App
