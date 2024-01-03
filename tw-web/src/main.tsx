import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Middle from './Middle/Middle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Middle />
    <Footer />
  </React.StrictMode>,
)
