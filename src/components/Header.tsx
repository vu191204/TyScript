import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          Your Logo
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/register' className='nav-link'>
                Register
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin' className='nav-link'>
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
