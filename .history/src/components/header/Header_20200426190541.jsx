import React, {useState, useEffect} from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from './header.module.css'

import khale from '../../assets/images/khale.png'
import rovina from '../../assets/images/rovina.png'

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

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== state) {
				setState(isTop)
			}
		  });
	}, [state])
    
    return(
        <>
        <div className={state ? classes.headerSubMenu : classes.headerSubMenuToggle }>
            <div className={classes.headerSubMenuLeft}>
                <div className={classes.headerSubMenuLeftItem}>
                    <img src={rovina} alt="" className={classes.headerSubMenuLeftItemImage} />
                    <div className={[classes.headerSubMenuLeftItemBottom, classes.headerSubMenuLeftItemBottomLeft].join(' ')}>
                        <h4 className={classes.headerSubMenuLeftItemTitle}>
                            بهترین و با کیفیت ترین هدست هارا از ما بخواهید
                        </h4>
                        <div className={classes.headerSubMenuLeftItemInfobox}>
                            <span className={classes.headerSubMenuLeftItemDate}>6 روز پیش</span>
                            .
                            <div className={classes.headerSubMenuLeftItemlikeBox}>
                                <FontAwesomeIcon icon={faHeart} className={classes.headerSubMenuLeftItemlikeIcon} />
                                <span>120</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.headerSubMenuLeftItem}>
                    <img src={khale} alt="" className={classes.headerSubMenuLeftItemImage} />
                    <div className={classes.headerSubMenuLeftItemBottom}>
                        <h4 className={classes.headerSubMenuLeftItemTitle}>
                            بهترین و با کیفیت ترین هدست هارا از ما بخواهید
                        </h4>
                        <div className={classes.headerSubMenuLeftItemInfobox}>
                            <span className={classes.headerSubMenuLeftItemDate}>6 روز پیش</span>
                            .
                            <div className={classes.headerSubMenuLeftItemlikeBox}>
                                <FontAwesomeIcon icon={faHeart} className={classes.headerSubMenuLeftItemlikeIcon} />
                                <span>120</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.headerSubMenuRight}>
                    <a className={classes.headerSubMenuRightLink}>تکنولوژی</a>
                    <a className={classes.headerSubMenuRightLink}>صنعتی</a>
                    <a className={classes.headerSubMenuRightLink}>ابزارآلات</a>
                    <a className={classes.headerSubMenuRightLink}>کارخانه</a>
                    <div className={classes.headerSubMenuRightItemDivider}></div>
                    <a className={classes.headerSubMenuRightLink}>نمایش همه</a>
                </div>
            </div>
        </div>
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
                            {items.map(item => (
                                <li className={classes.navMenuItem}>
                                    <a className={classes.navMenuItemLink}>{item.name}</a>
                                </li>
                            ))}
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