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
				header: file(absolutePath: { regex: "/logo_new_en_yellow.png/" }) {
					childImageSharp {
						fixed(width: 145) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

	const headerIcon = header.childImageSharp.fixed;

    const [unmount, setUnmount] = useState(false)
    const [state, setState] = useState(true)
    const [toggle, setToggle] = useState(false)

	useEffect(() => {
        setUnmount(false)
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
        <HeaderSubmenu state={state} toggle={toggle} static={false} />
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
                    <div className={state ? classes.navbarIcons : classes.navbarIconsToggle}>
                        {/* <FontAwesomeIcon icon={faSearch} className={classes.headerSearchIcon} /> */}
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header