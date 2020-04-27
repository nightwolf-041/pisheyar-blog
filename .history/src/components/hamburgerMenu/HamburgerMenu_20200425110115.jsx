import React from 'react'
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faLocationArrow, faPhoneAlt, faRss, faSitemap } from "@fortawesome/free-solid-svg-icons";


import classes from './hamburgerMenu.module.css'


const HamburgerMenu = () => {

    const { header } = useStaticQuery(
		graphql`
			query {
				header: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 60) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

    const headerIcon = header.childImageSharp.fixed;
    

    return(
        
        <div className={classes.hamburgerMenu}>
            <div className={classes.hamburgerMenuImageBox}>
                <Img fixed={headerIcon} alt="" />
            </div>
            <div className={classes.hamburgerMenuItem}>خانه</div>
            <div className={classes.hamburgerMenuItem}>
                <span>دسته بندی</span>
                <FontAwesomeIcon icon={} className={classes.hamburgerMenuArrowIcon} />
            </div>
            <div className={classes.hamburgerMenuItem}>فیلم</div>
            <div className={classes.hamburgerMenuItem}>اخبار</div>
            <div className={classes.hamburgerMenuItem}>درباره ما</div>
        </div>
    )
}

export default HamburgerMenu