import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import createPoint from './pages/create point'

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact/>
        <Route component={createPoint} path="/create-point"/>

        </BrowserRouter>
    )
}

export default Routes;