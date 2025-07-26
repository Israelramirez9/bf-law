import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Home, About, Contact, Professionals, Clients } from './pages'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
      </Route>
    </Routes>
  )
}

export default App
