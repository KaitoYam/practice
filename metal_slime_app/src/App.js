import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Recommended from './pages/Recommended'
import album from './pages/album'
import Todo from './todo/Todo'
import UpDate from './profile/UpDate'

import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'
import firebase from './config/Firebase'

import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core'
import './App.css'
import Menu from './Menu/menu'
import HeaderImage from './profile/HeaderImage'
import start from './start'

const UseStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: "#ffb74d",
    },
})

const App = () => {
    const classes = UseStyles();
    return (
        <>
            <header>
                <div className={classes.root}>
                    <AppBar position='sticky' className='header-bgc'>
                        <Toolbar>
                            <AuthProvider>
                                <Router>
                                    <Menu />
                                </Router>
                            </AuthProvider>
                            <Typography variant='h6' className={classes.title} >
                                Code Village 41期
                            </Typography>
                            <AuthProvider>
                                <Router>
                                    <div className='header-icon'>
                                        <HeaderImage />
                                    </div>
                                </Router>
                            </AuthProvider>
                            <Button variant='contained' href='/login' size='small'
                                style={{ background: "#ffb74d" }} onClick={() => firebase.auth().signOut()}
                            >
                                Log out
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </header>
            <main className='main'>
                <AuthProvider>
                    <Router>
                        <Switch>
                            <Route exact path='/signup' component={SignUp} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/update' component={UpDate} />
                            <LoggedInRoute exact path='/Room' component={Room} />
                            <Route exact path='/Todo' component={Todo} />
                            <Route exact path='/Recommended' component={Recommended} />
                            <Route exact path='/album' component={album} />
                            <Route exact path='' component={start} />
                        </Switch>
                    </Router>
                </AuthProvider>
            </main>
            <footer className='footer' >
                <p>@Code Village 41期生　Team-B チーム開発</p>
            </footer>
        </>
    )
}

export default App