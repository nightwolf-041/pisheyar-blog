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
						fluid(maxWidth: 10, maxHeight: 10) {
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
				{title !== 'Starter Blog' && (
					<Link to="/">
						<Img fluid={homeIcon} alt="Link to go to home page" />
					</Link>
				)}
			</div>
			<header>
			</header>
			<main>{children}</main>
			<footer>© {new Date().getFullYear()}, StartDone</footer>
		</div>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;