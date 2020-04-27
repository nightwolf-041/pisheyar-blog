import React, { useState } from 'react'
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faHome, faLayerGroup, faFilm, faNewspaper, faAddressCard, faWindowRestore } from "@fortawesome/free-solid-svg-icons";

import classes from './hamburgerMenu.module.css'


const HamburgerMenu = (props) => {

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

    let [toggle, setToggle] = useState(false)

    const dropdownToggler = () => {
        setToggle(true)
    }
    

    return(
        
        <div className={classes.hamburgerMenu}>
            <div className={classes.hamburgerMenuImageBox}>
                <Img fixed={headerIcon} alt="" />
            </div>
            <div className={classes.hamburgerMenuItem}>
                <span>خانه</span>
                <FontAwesomeIcon icon={faHome} className={classes.hamburgerMenuItemIcon} />
            </div>
            <div className={[classes.hamburgerMenuItem, classes.hamburgerMenuDropItem].join(' ')}
            onClick={dropdownToggler} >
                <div className={classes.hamburgerMenuItemArrowed}>
                    <span>دسته بندی</span>
                    <FontAwesomeIcon icon={faAngleLeft}
                    className={!toggle ?
                        classes.hamburgerMenuArrowIcon
                        : classes.hamburgerMenuArrowIconToggle
                    } />
                </div>
                <FontAwesomeIcon icon={faLayerGroup} className={classes.hamburgerMenuItemIcon} />
            </div>
            
            <div className={!toggle ?
                classes.hamburgerMenuDropdown
                : classes.hamburgerMenuDropdownToggle
            }>
                <span>یک</span>
                <span>دو</span>
                <span>سه</span>
                <span>چار</span>
            </div>

            <div className={classes.hamburgerMenuItem}>
                <span>فیلم</span>
                <FontAwesomeIcon icon={faFilm} className={classes.hamburgerMenuItemIcon} />
            </div>
            <div className={classes.hamburgerMenuItem}>
                <span>اخبار</span>
                <FontAwesomeIcon icon={faNewspaper} className={classes.hamburgerMenuItemIcon} />
            </div>
            <div className={classes.hamburgerMenuItem}>
                <span>سایت پیشه یار</span>
                <FontAwesomeIcon icon={faWindowRestore} className={classes.hamburgerMenuItemIcon} />
            </div>
            <div className={classes.hamburgerMenuItem}>
                <span>درباره ما</span>
                <FontAwesomeIcon icon={faAddressCard} className={classes.hamburgerMenuItemIcon} />
            </div>
        </div>
    )
}

export default HamburgerMenu