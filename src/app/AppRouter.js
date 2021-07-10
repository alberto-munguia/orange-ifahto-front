import React, { useState } from 'react'

import { AuthContext } from './components/Context/AuthContext'

import App from './pages/layouts/App'
import Auth from './pages/layouts/Auth'

const AppRouter = ({ children }) => {
    const [auth, setAuth] = useState({})

    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth }}>
                { auth.user ? <Auth /> : <App /> }
            </AuthContext.Provider>
        </>
    )
}

export default AppRouter
