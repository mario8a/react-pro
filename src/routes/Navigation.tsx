import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/register"   className={({isActive}) => isActive ? 'nav-active' : ''} >Register page</NavLink>
            </li>
            <li>
              <NavLink to="/about"  className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users"  className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={ <RegisterPage />} />
          <Route path="users" element={<h1>users page</h1>} />
          <Route path="home" element={<h1>Home page</h1>} />

          <Route path="/*" element={ <Navigate to="/home" replace /> } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
