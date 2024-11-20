import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'

import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          {/* <Route path="/" element={<p>Home component</p>} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/records" element={<p>Records component</p>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
