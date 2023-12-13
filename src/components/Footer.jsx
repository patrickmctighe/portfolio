// Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import{ useTheme } from '../theme/ThemeContext';

export default function Footer() {
  const { activeTheme } = useTheme();

  return (
    <div className="footerMain">
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>
      <div className="footerGit">
        <NavLink to="https://github.com/patrickmctighe" target="_blank">
          <img className="gitHub" src="./footer-images/githubtran.png" alt="GitHub" />
        </NavLink>
      </div>
      <div className={`circle ${activeTheme}`}></div>

      <div className="footerLinkedIn">
        <NavLink to="https://www.linkedin.com/in/patrick-mctighe-290a21255/" target="_blank">
          <img className="linkedIn" src="./footer-images/linked5.png" alt="LinkedIn" />
        </NavLink>
      </div>
      <div className={`circle ${activeTheme}`}></div>

      <div className="footerEmail">
        <NavLink to="mailto:patrickquinnmctighe@gmail.com" target="_blank">
          <img className="eMail" src="./footer-images/email3.png" alt="Email" />
        </NavLink>
      </div>
      <div className={`circle ${activeTheme}`}></div>
      <div className={`circle ${activeTheme}`}></div>

      <div className={`circle ${activeTheme}`}></div>
    </div>
  );
}