import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faInstagram,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// import styles from './Layout.module.css'
import './Layout.css';

function Layout({ title, children }) {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: file(absolutePath: { regex: "/home-icon.png/" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  const homeIcon = home.childImageSharp.fixed;

  const items = [
    { id: 1, name: 'خانه' },
    {
      id: 2,
      name: 'دسته بندی',
      dropdown: [
        { id: 21, name: 'صنعتی' },
        { id: 22, name: 'ورزشی' },
        { id: 23, name: 'هنری' },
      ],
    },
    { id: 3, name: 'درباره ما' },
  ];

  const [state, setState] = useState({
    isTop: true,
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        setState({ isTop });
      }
    });
  }, [state]);

  return (
    <>
      <header className={state.isTop ? 'header' : 'header-hide'}>
        {/* <div className="navbar-menu"> */}
        <nav className="nav">
          <ul className="nav__menu">
            {items.map((item) => (
              <li className="nav__menu-item">
                <span>{item.name}</span>
                <ul className="nav__submenu">
                  {item.dropdown
                    ? item.dropdown.map((drop) => (
                        <li className="nav__submenu-item">
                          <span>{drop.name}</span>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <Img fixed={homeIcon} alt="پیشه یار" />
        <div className="navbar-icons">
          <Link to="#" className="navbar-icon-link" title="telegram">
            <FontAwesomeIcon icon={faTelegram} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className="navbar-icon-link" title="instagram">
            <FontAwesomeIcon icon={faInstagram} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className="navbar-icon-link" title="gmail">
            <FontAwesomeIcon icon={faGoogle} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className="navbar-icon-link" title="twitter">
            <FontAwesomeIcon icon={faTwitter} style={{ width: '50px' }} />
          </Link>
        </div>
      </header>
      <div className="homeLinkContainer">
        {title !== 'وبلاگ پیشه یار' && (
          <Link to="/">
            {/* <Img fluid={homeIcon} alt="بازگشت به صفحه اصلی" /> */}
          </Link>
        )}
      </div>
      <main>{children}</main>
      <footer>
        <b>© {new Date().getFullYear()}, StartDone</b>
      </footer>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
