import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import './index.css'

import PrivacyPolicy from './PrivacyPolicy.jsx'
import Terms from './Terms.jsx'
import RefundPolicy from './RefundPolicy.jsx'
import Careers from './Careers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)