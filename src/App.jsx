import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lisa/privacy" element={<Privacy />} />
        <Route path="/privacy" element={<Navigate to="/lisa/privacy" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
