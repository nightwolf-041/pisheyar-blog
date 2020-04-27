import React, {useState, useEffect} from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import HeaderSubmenu from '../headerSubmenu/HeaderSubmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from './header.module.css'

const Header = (props) => {
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

    const [state, setState] = useState(true)
    const [toggle, setToggle] = useState(false)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== state) {
				setState(isTop)
			}
		  });
    }, [state])
    
    const toggleSubmenu = () => {
        setToggle(toggle => !toggle)
    }
    
    return(
        <>
        <HeaderSubmenu state={state} />
        <header className={state ? classes.header : classes.headerToggle}>
            
            <div className={classes.headerMobile}>
                <FontAwesomeIcon icon={faBars} className={classes.hamburgerIcon} onClick={props.showHamburger}/>
                <Img fixed={headerIcon} alt="پیشه یار" />
            </div>
            
            <div className={classes.headerContainer}>
                
                {state ? 
                    <div className={classes.headerTop}>
                        <Img fixed={headerIcon} alt="پیشه یار" />
                    </div>
                    :null
                }

                <div className={state ? classes.headerBottom : classes.headerBottomToggle}>
                    {state ?
                        <div className={classes.headerBottomEmptyDiv}></div> 
                        : 
                        <Img fixed={headerIcon} alt="پیشه یار" />
                    }
                    <nav className={classes.nav}>
                        <ul className={classes.navMenu}>
                            <li className={classes.navMenuItem}>
                                <a className={classes.navMenuItemLink}>خانه</a>
                            </li>
                            <li className={classes.navMenuItem} onClick={toggleSubmenu}>
                                <a className={classes.navMenuItemLink}>دسته بندی</a>
                            </li>
                            <li className={classes.navMenuItem}>
                                <a className={classes.navMenuItemLink}>فیلم</a>
                            </li>
                            <li className={classes.navMenuItem}>
                                <a className={classes.navMenuItemLink}>اخبار</a>
                            </li>
                            <li className={classes.navMenuItem}>
                                <a className={classes.navMenuItemLink}>سایت پیشه یار</a>
                            </li>
                            <li className={classes.navMenuItem}>
                                <a className={classes.navMenuItemLink}>درباره ما</a>
                            </li>
                        </ul>
                    </nav>
                    {/* <div className={classes.navbarIcons}> */}
                        <FontAwesomeIcon icon={faSearch} className={classes.headerSearchIcon} />
                    {/* </div> */}
                </div>
            </div>
        </header>
        </>
    )
}

export default Header