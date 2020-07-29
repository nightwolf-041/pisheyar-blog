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
				header: file(absolutePath: { regex: "/logo_new_en_yellow.png/" }) {
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

    const [toggle, setToggle] = useState(false)
    const toggleSubmenu = () => {
        setToggle(toggle => !toggle)
    }

    
    return(
        <>
        <HeaderSubmenu state={false} toggle={toggle} static={true} />
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
                        <FontAwesomeIcon icon={faSearch} className={classes.singleHeaderSearchIcon} />
                    {/* </div> */}
                </div>
            </div>
        </header>
        </>
    )
}

export default SingleHeader