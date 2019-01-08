import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <header>
        <div className="inner">
          <nav>
            <a href="#" className="logo">
              <img width="36" src="https://kitwiissy.s3.amazonaws.com/wiissyblue.png" />
            </a>
            <input type="checkbox" id="nav" /><label for="nav"></label>
            <ul>
              <li><a href="#">Home</a></li>
              <li>
                <a href="#">Work</a>
              </li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;