import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from './Layout.module.css'
import './Layout.css'

function Layout({ title, children }) {
	const { home, footer } = useStaticQuery(
		graphql`
			query {
				home: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 60) {
							...GatsbyImageSharpFixed
						}
					}
				}
				footer: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 150) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

	const homeIcon = home.childImageSharp.fixed;
	const homeIconFooter = home.childImageSharp.fixed;

	const items = [
		{id: 1, name: 'خانه'},
		{id: 2, name: 'دسته بندی', dropdown: [
			{id: 21, name: 'صنعتی'},
			{id: 22, name: 'ورزشی'},
			{id: 23, name: 'هنری'},
		]},
		{id: 3, name: 'فیلم'},
		{id: 3, name: 'اخبار'},
		{id: 3, name: 'سایت پیشه یار'},
		{id: 3, name: 'درباره ما'},
	]

	const [state, setState] = useState(true)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== state) {
				setState(isTop)
			}
		  });
	}, [state])
	
	return (
		<>
			<header className={state ? classes.header : classes.headerToggle}>
				
				{state ? 
					<div className={classes.headerTop}>
						<Img fixed={homeIcon} alt="پیشه یار" />
					</div>
					:null
				}
				<div className={state ? classes.headerBottom : classes.headerBottomToggle}>
					{state ?
						<div className={classes.headerBottomEmptyDiv}></div> 
						: 
						<Img fixed={homeIcon} alt="پیشه یار" />
					}
					<nav className={classes.nav}>
						<ul className={classes.navMenu}>
							{items.map(item => (
								<li className={classes.navMenuItem}>
									<a className={classes.navMenuItemLink}>{item.name}</a>
									<ul className={classes.navSubmenu}>
										{item.dropdown ?
											item.dropdown.map(drop => (
												<li className={classes.navSubmenuItem}>
													<a className={classes.navSubmenuItemLink}>
														{drop.name}
													</a>
												</li>
											))
										: null
										}
									</ul>
								</li>
							))}
						</ul>
					</nav>
					{/* <div className={classes.navbarIcons}> */}
						<FontAwesomeIcon icon={faSearch} className={classes.headerSearchIcon} />
					{/* </div> */}
				</div>
			</header>
            
			<main className={classes.blogMain}>
				{children}
			</main>

			<footer className={classes.footer}>
                <div className={classes.footerTop}>
					<a className={classes.footerTopMenuItem}>خانه</a>
					<a className={classes.footerTopMenuItem}>گالری</a>
					<a className={classes.footerTopMenuItem}>فیلم</a>
					<a className={classes.footerTopMenuItem}>اخبار</a>
					<Img fixed={homeIconFooter} alt="پیشه یار" />
					<li className={classes.footerTopMenuItem}>سایت پیشه یار</li>
					<li className={classes.footerTopMenuItem}>ارتباط با ما</li>
				</div>
                {/* <div className={classes.footerBottom}></div> */}
            </footer>
		</>
	);
}

{/* <Link to="#" className={classes.navbarIconLink} title="telegram">
	<FontAwesomeIcon icon={faTelegram} style={{width: '50px'}} />
</Link>
<Link to="#" className={classes.navbarIconLink} title="instagram">
	<FontAwesomeIcon icon={faInstagram} style={{width: '50px'}} />
</Link>
<Link to="#" className={classes.navbarIconLink} title="gmail">
	<FontAwesomeIcon icon={faGoogle} style={{width: '50px'}} />
</Link>
<Link to="#" className={classes.navbarIconLink} title="twitter">
	<FontAwesomeIcon icon={faTwitter} style={{width: '50px'}} />
</Link> */}
{/* <div className={classes.homeLinkContainer}>
	{title !== 'وبلاگ پیشه یار' && (
		<Link to="/">
			<Img fluid={homeIcon} alt="بازگشت به صفحه اصلی" />
		</Link>
	)}
</div> */}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;