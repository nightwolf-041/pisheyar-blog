import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
      }
    `
  );

  const homeIcon = home.childImageSharp.fluid;

  return (
    <div className="app-container">
      <div className="homeLinkContainer">
        {title !== 'وبلاگ پیشه یار' && (
          <Link to="/">
            <Img fluid={homeIcon} alt="بازگشت به صفحه اصلی" />
          </Link>
        )}
      </div>
      <header></header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, StartDone</footer>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
