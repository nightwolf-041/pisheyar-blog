import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Layout({ title, children }) {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: file(absolutePath: { regex: "/home-icon.png/" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pisheyar: file(absolutePath: { regex: "/pisheyar.svg/" }) {
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const homeIcon = home.childImageSharp.fluid;
  const pisheyarIcon = pisheyar.childImageSharp.fluid;
  return (
    <>
      <header>
        <Img fluid={pisheyarIcon} alt="پیشه یار" />
        <div className="">
          <div className="navbar-icons">
            <Link to="#" className="navbar-icon-link" title="telegram">
              <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
              <i className="fab fa-telegram-plane navbar-social-icon navbar-telegram-icon"></i>
            </Link>
            <Link to="#" className="navbar-icon-link" title="instagram">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
              <i className="fab fa-instagram navbar-social-icon navbar-instagram-icon"></i>
            </Link>
            <Link to="#" className="navbar-icon-link" title="gmail">
              <FontAwesomeIcon icon={['fab', 'google']} />
              <i className="fab fa-google navbar-social-icon navbar-google-icon"></i>
            </Link>
            <Link to="#" className="navbar-icon-link" title="twitter">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              <i className="fab fa-twitter navbar-social-icon navbar-twitter-icon"></i>
            </Link>
          </div>
        </div>
      </header>
      <div className="homeLinkContainer">
        {title !== 'وبلاگ پیشه یار' && (
          <Link to="/">
            <Img fluid={homeIcon} alt="بازگشت به صفحه اصلی" />
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
