import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Recommended from './pages/Recommended'
import Todo from './pages/todo/Todo'


import { AuthProvider } from './AuthService'

import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/Room' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/Recommended' component={Recommended} />
                    <Route exact path='/Todo' component={Todo} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App