import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navigation-list-item">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
