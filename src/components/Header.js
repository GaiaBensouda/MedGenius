import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-logo-title">
        <img src={`${process.env.PUBLIC_URL}/images/MedGenius.png`} alt="MedGenius Logo" className="header-logo" />
        <Link to="/" className="header-title">MedGenius</Link>
      </div>
      <div className="header-links">
        <Link to="/">{t('Home')}</Link>
        <Link to="/project">{t('Project')}</Link>
        <Link to="/about">{t('About')}</Link>
        <Link to="/team">{t('Team')}</Link>
        <Link to="/login" className="button">{t('Login')}</Link>
        <Link to="/talktoexpert" className="button">Talk to Expert</Link>
        <Link to="/userdashboard" className="button">Dashboard</Link>
        <select onChange={(e) => changeLanguage(e.target.value)} className="language-select">
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
