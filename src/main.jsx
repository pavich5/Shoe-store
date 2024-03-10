import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ShoeProvider } from './Contex/ShoesContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShoeProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </ShoeProvider>

)
