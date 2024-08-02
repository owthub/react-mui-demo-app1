import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppGlobalState from './contexts/AppGlobalState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppGlobalState>
      <App />
  </AppGlobalState>
  // </React.StrictMode>,
)
