import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <NavLink to="/" className="navbar-item nav-home">
      <span className="brand-first">Convergent Mediation Cockpit</span>

    </NavLink>
  </div>
);

export default HeaderBarBrand;
