import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PAWA from './PAWA.tsx'

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PAWA />} />
        <Route path="*" element={<PAWA />} />
      </Routes>
      </Router>
  </React.StrictMode>,
)
