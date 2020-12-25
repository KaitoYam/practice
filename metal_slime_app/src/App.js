import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Recommended from './pages/Recommended'
import album from './pages/album'
import Todo from './todo/Todo'



import { AuthProvider } from './AuthService'

import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <LoggedInRoute exact path='/Room' component={Room} />
                    <LoggedInRoute exact path='/Todo' component={Todo} />
                    <LoggedInRoute exact path='/Recommended' component={Recommended} />
                    <LoggedInRoute exact path='/album' component={album} />

                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App