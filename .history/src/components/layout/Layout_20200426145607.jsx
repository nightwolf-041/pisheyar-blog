import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import SingleHeader from '../singleHeader/SingleHeader';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Footer from '../../components/footer/Footer'

import classes from './Layout.module.css'
import './Layout.css'


function Layout({ title, children, singlePostHeader }) {

	let [show, setShow] = useState(false)

	const toggleHamburgerMenu = () => {
		setShow(show => !show)
	}
	
	return (
		<>
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
				<div className={classes.contactusBottom}>
					<h4 className={classes.contactusBottomTitle}>بروز باشید</h4>
					<p className={classes.contactusBottomSubtitle}>
						ایمیل خود را وارد کنید تا از اخبار بلاگ ما مطلع شوید
					</p>
					<div className={classes.contactusBottomInputBox}>
						<button className={classes.contactusBottomInputBoxButton}>عضویت</button>
						<input type="email" placeholder="آدرس ایمیل شما" required
						className={classes.contactusBottomInputBoxInput} />
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Layout;