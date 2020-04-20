import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faTelegram,
	faInstagram,
	faGoogle,
	faTwitter } from "@fortawesome/free-brands-svg-icons";

function Layout({ title, children }) {
	const { home } = useStaticQuery(
		graphql`
			query {
				home: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 150, height: 150) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

	const homeIcon = home.childImageSharp.fixed;
	return (
		<>
			<header>
				<Img fixed={homeIcon} alt="پیشه یار" />
				<div className=""></div>
				<div className="navbar-icons">
					<Link to="#" className="navbar-icon-link" title="telegram">
						<FontAwesomeIcon icon={faTelegram} style={{width: '50px'}} />
					</Link>
					<Link to="#" className="navbar-icon-link" title="instagram">
						<FontAwesomeIcon icon={faInstagram} style={{width: '50px'}} />
					</Link>
					<Link to="#" className="navbar-icon-link" title="gmail">
						<FontAwesomeIcon icon={faGoogle} style={{width: '50px'}} />
					</Link>
					<Link to="#" className="navbar-icon-link" title="twitter">
						<FontAwesomeIcon icon={faTwitter} style={{width: '50px'}} />
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