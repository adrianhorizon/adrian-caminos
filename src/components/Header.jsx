import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Country from './Country';
import Social from './Social';
import '../assets/styles/components/Header.scss';

const Header = () => {
    const [t, i18n] = useTranslation()
    const [country, setCountry] = useState('es')
    const whatsapp = 'https://api.whatsapp.com/send?phone=573223112099&text=Hola%20En%20que%20te%20puedo%20ayudar&source=&data=&app_absent='

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <Link className="logo" to="/">
                        <img width="40" src="https://kitwiissy.s3.amazonaws.com/wiissywhite.png" alt="encuentrame como wiissy de adrian caminos" />
                    </Link>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label for="nav" className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="wrapper">
                        <ul className="menu">
                            <li className="menu-item"><Link to="/">{t('MENU.HOME')}</Link></li>
                            <li className="menu-item"><Link to="/">{t('MENU.WORKS')}</Link></li>
                            <li className="menu-item"><Link to="/">{t('MENU.BLOG')}</Link></li>
                            <li className="menu-item"><Link to="/">{t('MENU.CONTACT')}</Link></li>
                            <li className="menu-item">
                                <a href="#">
                                    <select
                                        value={country}
                                        onChange={event => {
                                            i18n.changeLanguage(event.target.value)
                                            setCountry(event.target.value)
                                        }}
                                        className="container-select">
                                        <option value="es">{t('LANGUAGE.SPANISH')}</option>
                                        <option value="en">{t('LANGUAGE.ENGLISH')}</option>
                                        <option value="pt">{t('LANGUAGE.PORTUGUESE')}</option>
                                    </select>
                                    <Country country={country} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row-header">
                    <div className="column-header">
                        <div className="text-column">
                            <h1>{t('TITLE')}</h1>
                            <div className="button-style">
                                <a className="container-button" href={whatsapp} rel="noreferrer noopener" target="_blank">
                                    {t('MENU.HIRE_ME')}
                                </a>
                            </div>
                            <Social />
                        </div>
                    </div>
                    <div className="column-header">
                        <div className="image-column"></div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;