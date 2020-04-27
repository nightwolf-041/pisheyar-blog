import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import SingleHeader from '../singleHeader/SingleHeader';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import ContactusBottom from '../contactusBottom/ContactusBottom'
import Footer from '../../components/footer/Footer'

import classes from './Layout.module.css'
import './Layout.css'


function Layout({ title, children, singlePostHeader }) {

	let [show, setShow] = useState(false)

	const toggleHamburgerMenu = () => {
		setShow(show => !show)
	}
	
	return (
		<div className={classes.layoutBackground}>
			{!singlePostHeader ?
			<Header showHamburger={toggleHamburgerMenu} />
			:
			<SingleHeader showHamburger={toggleHamburgerMenu} />
			}
			<HamburgerMenu show={show} />
			<div className={!show ? classes.layoutOverlay : classes.layoutOverlayToggle}
			onClick={toggleHamburgerMenu}></div>
            
			<main className={classes.blogMain}>
				{children}
				<ContactusBottom />
			</main>

			<Footer />
		</div>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;