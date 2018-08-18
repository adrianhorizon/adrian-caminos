import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Country from './Country';
import '../assets/styles/components/Header.scss';

const Header = () => {
    const [t, i18n] = useTranslation()
    const [country, setCountry] = useState('es')

    return (
        <>
            <header className="container-header">
                <div className="inner">
                    <nav>
                        <Link to="/">
                            <img width="40" src="https://kitwiissy.s3.amazonaws.com/wiissywhite.png" alt="encuentrame como wiissy de adrian caminos" />
                        </Link>
                        <input type="checkbox" id="nav" /><label for="nav"></label>
                        <ul>
                            <li><Link className="container-link-button" to="/">{t('MENU.HOME')}</Link></li>
                            <li><Link className="container-link-button" to="/">{t('MENU.ABOUT')}</Link></li>
                            <li><Link className="container-link-button" to="/">{t('MENU.WORKS')}</Link></li>
                            <li><Link className="container-link-button" to="/">{t('MENU.BLOG')}</Link></li>
                            <li><Link className="container-link-button" to="/">{t('MENU.CONTACT')}</Link></li>
                            <li>
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
                            </li>
                        </ul>
                    </nav>
                    <div className='row-header'>
                        <div className='column-header'>
                            <div className='text-column'>
                                <h1>{t('TITLE')}</h1>
                                <button className="container-button">{t('MENU.HIRE_ME')}</button>
                            </div>
                        </div>
                        <div className='column-header'>
                            <div className='image-column'></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;