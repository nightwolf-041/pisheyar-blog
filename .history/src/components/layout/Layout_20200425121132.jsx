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

	let [show, setShow] = useState(false)

	const toggleHamburgerMenu = () => {
		setShow(show => !show)
	}
	
	return (
		<>
			<Header showHamburger={toggleHamburgerMenu} />
			<HamburgerMenu show={show} />
			<div className={classes.layoutOverlay}></div>
            
			<main className={classes.blogMain}>
				{children}
			</main>

			<Footer />
		</>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;