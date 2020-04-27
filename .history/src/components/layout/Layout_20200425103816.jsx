import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../header/Header';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Footer from '../../components/footer/Footer'
import { faGoogle, faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faLocationArrow, faPhoneAlt, faRss, faSitemap } from "@fortawesome/free-solid-svg-icons";

import classes from './Layout.module.css'
import './Layout.css'


function Layout({ title, children }) {
	
	return (
		<>
			<Header />
			<HamburgerMenu />
            
			<main className={classes.blogMain}>
				{children}
			</main>

			<Footer />
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