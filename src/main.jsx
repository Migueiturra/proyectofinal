import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext' // ✅ importar
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider> {/* ✅ envolver App */}
      <App />
    </AuthProvider>
 
)
