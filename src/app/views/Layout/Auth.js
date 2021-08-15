import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Col, Image, Row } from 'react-bootstrap'

import SignIn from '../Auth/SignIn'
import ForgotPassword from '../Auth/ForgotPassword'

const Auth = () => {
    return (
        <Router>
            <Row className="min-h-fullscreen center-vh p-20 m-0">
                <Col>
                    <div className="text-center pb-30">
                        <Image src="/assets/img/logo-ifahto.svg" fluid />
                    </div>
                    <Switch>
                        <Route exact path="/login" component={ SignIn } />
                        <Route exact path="/password-recovery" component={ ForgotPassword } />

                        <Redirect to="/login" />
                    </Switch>
                </Col>
            </Row>
        </Router>
    )
}

export default Auth
