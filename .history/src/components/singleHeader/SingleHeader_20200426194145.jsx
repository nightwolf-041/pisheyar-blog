import React, {useState, useEffect} from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import HeaderSubmenu from '../headerSubmenu/HeaderSubmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import classes from './singleHeader.module.css'

const SingleHeader = (props) => {
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

    
    return(
        <>
        <HeaderSubmenu state={state} toggle={toggle}/>
        <header className={classes.singleHeader}>
            
            <div className={classes.singleHeaderMobile}>
                <FontAwesomeIcon icon={faBars} className={classes.hamburgerIcon} onClick={props.showHamburger}/>
                <Img fixed={headerIcon} alt="پیشه یار" />
            </div>
            
            <div className={classes.singleHeaderContainer}>
                
                <div className={classes.singleHeaderTop}>
                    <Img fixed={headerIcon} alt="پیشه یار" />
                </div>

                <div className={classes.singleHeaderBottom}>
                    <div className={classes.singleHeaderBottomEmptyDiv}></div> 
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
                        <FontAwesomeIcon icon={faSearch} className={classes.singleHeaderSearchIcon} />
                    {/* </div> */}
                </div>
            </div>
        </header>
        </>
    )
}

export default SingleHeader