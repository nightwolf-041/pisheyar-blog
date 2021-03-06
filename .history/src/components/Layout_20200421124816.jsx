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

import classes from './Layout.module.css';
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

  const [state, setState] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== state) {
        setState(isTop);
      }
    });
  }, [state]);

  return (
    <>
      <header className={state ? classes.header : classes.headerHide}>
        {/* <div className="navbar-menu"> */}
        <nav className={classes.nav}>
          <ul className={classes.navMenu}>
            {items.map((item) => (
              <li className={classes.navMenuItem}>
                <a href="" className={classes.navMenuItemLink}>
                  {item.name}
                </a>
                <ul className={classes.navSubmenu}>
                  {item.dropdown
                    ? item.dropdown.map((drop) => (
                        <li className={classes.navSubmenuItem}>
                          <a href="" className={classes.navSubmenuItemLink}>
                            {drop.name}
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <Img fixed={homeIcon} alt="پیشه یار" />
        <div className={classes.navbarIcons}>
          <Link to="#" className={classes.navbarIconLink} title="telegram">
            <FontAwesomeIcon icon={faTelegram} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className={classes.navbarIconLink} title="instagram">
            <FontAwesomeIcon icon={faInstagram} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className={classes.navbarIconLink} title="gmail">
            <FontAwesomeIcon icon={faGoogle} style={{ width: '50px' }} />
          </Link>
          <Link to="#" className={classes.navbarIconLink} title="twitter">
            <FontAwesomeIcon icon={faTwitter} style={{ width: '50px' }} />
          </Link>
        </div>
      </header>
      {/* <div className={classes.homeLinkContainer}>
				{title !== 'وبلاگ پیشه یار' && (
					<Link to="/">
						<Img fluid={homeIcon} alt="بازگشت به صفحه اصلی" />
					</Link>
				)}
			</div> */}
      <main className={classes.blogMain}>{children}</main>
      <footer className={classes.footer}>
        <b>© {new Date().getFullYear()}, StartDone</b>
      </footer>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
