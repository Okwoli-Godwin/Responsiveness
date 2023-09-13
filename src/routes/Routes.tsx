import React from 'react'
import {createBrowserRouter } from "react-router-dom"
import { Homelayout } from '../components'
import Home from '../pages/Home'
import Errorboundary from '../utils/hoc/Errorboundary'
import NotFound from '../utils/hoc/NotFound'

// export const Routes = () => {

 export const element = createBrowserRouter([
        {
            path: "/",
            element: <Homelayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    errorElement: <Errorboundary />,
                    hasErrorBoundary: true
                }
            ]
        },

     {
         path: "*",
         element: <NotFound />
     }
    ])


