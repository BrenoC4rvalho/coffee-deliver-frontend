import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {App} from './App.tsx'

import { Home } from './pages/Home/index.tsx'
import { Cart } from './pages/Cart/index.tsx'
import { Success } from './pages/Success/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/:orderId/success', element: <Success/> },
      { path: '*', element: <h1>Page not found</h1>  },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
