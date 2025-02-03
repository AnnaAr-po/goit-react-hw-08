import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.auth}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.auth}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;