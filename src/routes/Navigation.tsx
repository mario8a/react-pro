import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg';

import {
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  FormikAbstract,
  RegisterFormikPage,
  DynamicForm
} from '../03-forms/pages/index'

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
              <NavLink to="/formik-basic"  className={({isActive}) => isActive ? 'nav-active' : ''}>Formki basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup"  className={({isActive}) => isActive ? 'nav-active' : ''}>Formki yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components"  className={({isActive}) => isActive ? 'nav-active' : ''}>Formki Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract"  className={({isActive}) => isActive ? 'nav-active' : ''}>Formki Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register"  className={({isActive}) => isActive ? 'nav-active' : ''}>Formik register</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form"  className={({isActive}) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={ <RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstract" element={<FormikAbstract />} />
          <Route path="formik-register" element={<RegisterFormikPage />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route path="home" element={<h1>Home page</h1>} />

          <Route path="/*" element={ <Navigate to="/home" replace /> } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
