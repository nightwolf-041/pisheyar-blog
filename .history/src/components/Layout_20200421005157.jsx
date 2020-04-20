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

// import styles from './Layout.module.css'
import './Layout.css'

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
		{id: 1, name: 'خانه'},
		{id: 2, name: 'دسته بندی', dropdown: [
			{id: 21, name: 'صنعتی'},
			{id: 22, name: 'ورزشی'},
			{id: 23, name: 'هنری'},
		]},
		{id: 3, name: 'درباره ما'},
	]
	return (
		<>
			<header>
				<Img fixed={homeIcon} alt="پیشه یار" />
				{/* <div className="navbar-menu"> */}
				<nav className="nav">
					<ul className="nav__menu">
						{/* <li className="nav__menu-item">
							<span>خانه</span>
						</li>
						<li className="nav__menu-item">
							<span>دسته بندی</span>
							
							
						</li>
						<li className="nav__menu-item">
							<span>درباره ما</span>
						</li> */}
						{items.map(item => (
							<li className="nav__menu-item">
								<span>{item.name}</span>
								<ul className="nav__submenu">
									{item.dropdown ?
										item.dropdown.map(drop => (
											<li className="nav__submenu-item">
												<span>{drop.name}</span>
											</li>
										))
									: null
									}
								</ul>
							</li>
						))}
					</ul>
				</nav>
				{/* </div> */}
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

// const Submenu = () => (
	{/* <ul className="nav__submenu">
								<li className="nav__submenu-item ">
									<span>صنعتی</span>
								</li>
								<li className="nav__submenu-item ">
									<span>ورزشی</span>
								</li>
								<li className="nav__submenu-item ">
									<span>هنری</span>
								</li>
							</ul> */}
// )

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;