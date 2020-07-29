import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faPhoneAlt, faRss, faSitemap } from "@fortawesome/free-solid-svg-icons";

import classes from './footer.module.css'

const Footer = () => {
    const { footer } = useStaticQuery(
		graphql`
			query {
				footer: file(absolutePath: { regex: "/logo-yellow.png/" }) {
					childImageSharp {
						fixed(width: 185) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	);

    const homeIconFooter = footer.childImageSharp.fixed;
    
    return(
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.footerTop}>
                    <a className={classes.footerTopMenuItem}>خانه</a>
                    <a className={classes.footerTopMenuItem}>گالری</a>
                    <a className={classes.footerTopMenuItem}>فیلم</a>
                    <a className={classes.footerTopMenuItem}>اخبار</a>
                    <Img
                    fixed={homeIconFooter}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="پیشه یار"
                    className={classes.footerTopImage} />
                    <a className={classes.footerTopMenuItem}>سایت پیشه یار</a>
                    <a className={classes.footerTopMenuItem}>ارتباط با ما</a>
                </div>
                <div className={classes.footerTopMobile}>
                    <Img
                    fixed={homeIconFooter}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="پیشه پلاس"
                    className={classes.footerTopMobileImage} />
                    <div className={classes.footerTopMobileItemsBox}>
                        <a className={classes.footerTopMobileMenuItem}>خانه</a>
                        <a className={classes.footerTopMobileMenuItem}>گالری</a>
                        <a className={classes.footerTopMobileMenuItem}>فیلم</a>
                        <a className={classes.footerTopMobileMenuItem}>اخبار</a>
                        <a className={classes.footerTopMobileMenuItem}>سایت پیشه یار</a>
                        <a className={classes.footerTopMobileMenuItem}>ارتباط با ما</a>
                    </div>
                </div>
                <div className={classes.footerMiddleBox}>
                    <div className={classes.footerMiddleRight}>
                        <FontAwesomeIcon icon={faLocationArrow}
                            className={classes.footerMiddleRightIcon} />
                        <div className={classes.footerMiddRightTexts}>
                            آزادشهر، خیابان همایونی، نبش کوچه سوم، پلاک 25
                        </div>
                    </div>
                    <div className={classes.footerMiddleLeft}>
                        <div className={classes.footerMiddleLeftSection}>
                            <FontAwesomeIcon icon={faPhoneAlt}
                                className={classes.footerMiddleLeftIcon} />
                            <span className={classes.footerMiddLeftText}>
                                +98 910 834 7428
                            </span>
                        </div>
                        <div className={classes.footerMiddleLeftSection}>
                            <FontAwesomeIcon icon={faGoogle}
                                className={classes.footerMiddleLeftIcon} />
                            <span className={classes.footerMiddLeftText}>
                                deadhsad@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className={classes.footerMiddleBoxMobile}>
                    <div className={classes.footerMiddleBoxMobileRow}>
                        <div className={classes.footerMiddleRight}>
                            <FontAwesomeIcon icon={faLocationArrow}
                                className={classes.footerMiddleRightIcon} />
                            <div className={classes.footerMiddRightTexts}>
                                آزادشهر، خیابان همایونی، نبش کوچه سوم، پلاک 25
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerMiddleBoxMobileRow2}>
                        <div className={classes.footerMiddleLeft}>
                            <div className={classes.footerMiddleLeftSection}>
                                <FontAwesomeIcon icon={faPhoneAlt}
                                    className={classes.footerMiddleLeftIcon} />
                                <span className={classes.footerMiddLeftText}>
                                    +98 910 834 7428
                                </span>
                            </div>
                            <div className={classes.footerMiddleLeftSection}>
                                <FontAwesomeIcon icon={faGoogle}
                                    className={classes.footerMiddleLeftIcon} />
                                <span className={classes.footerMiddLeftText}>
                                    deadhsad@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footerTopDivider}></div>
                <div className={classes.footerSocialBox}>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            SITEMAP
                        </span>
                        <FontAwesomeIcon icon={faSitemap}
                            className={classes.footerSocialItemIcon} />
                    </div>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            RSS FEED
                        </span>
                        <FontAwesomeIcon icon={faRss}
                            className={classes.footerSocialItemIcon} />
                    </div>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            ایمیل
                        </span>
                        <FontAwesomeIcon icon={faGoogle}
                            className={classes.footerSocialItemIcon} />
                    </div>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            واتساپ
                        </span>
                        <FontAwesomeIcon icon={faWhatsapp}
                            className={classes.footerSocialItemIcon} />
                    </div>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            تلگرام
                        </span>
                        <FontAwesomeIcon icon={faTelegramPlane}
                            className={classes.footerSocialItemIcon} />
                    </div>
                    <div className={classes.footerSocialItem}>
                        <span className={classes.footerSocialItemSpan}>
                            اینستاگرام
                        </span>
                        <FontAwesomeIcon icon={faInstagram}
                            className={classes.footerSocialItemIcon} />
                    </div>
                </div>
                <div className={classes.footerSocialBoxMobile}>
                    <div className={classes.footerSocialBoxMobileColumn}>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                واتساپ
                            </span>
                            <FontAwesomeIcon icon={faWhatsapp}
                                className={classes.footerSocialItemIcon} />
                        </div>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                تلگرام
                            </span>
                            <FontAwesomeIcon icon={faTelegramPlane}
                                className={classes.footerSocialItemIcon} />
                        </div>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                اینستاگرام
                            </span>
                            <FontAwesomeIcon icon={faInstagram}
                                className={classes.footerSocialItemIcon} />
                        </div>
                    </div>
                    <div className={classes.footerSocialBoxMobileColumn}>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                SITEMAP
                            </span>
                            <FontAwesomeIcon icon={faSitemap}
                                className={classes.footerSocialItemIcon} />
                        </div>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                RSS FEED
                            </span>
                            <FontAwesomeIcon icon={faRss}
                                className={classes.footerSocialItemIcon} />
                        </div>
                        <div className={classes.footerSocialItem}>
                            <span className={classes.footerSocialItemSpan}>
                                ایمیل
                            </span>
                            <FontAwesomeIcon icon={faGoogle}
                                className={classes.footerSocialItemIcon} />
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottomDivider}></div>
                <div className={classes.footerBottom}>
                    <p className={classes.footerBottomText}>
                        ساخته شده توسط گروه startdone
                    </p>
                    <p className={classes.footerBottomText}>
                        وبلاگ سایت پیشه یار
                    </p>
                </div>
            {/* <div className={classes.footerBottom}></div> */}
            </div>
        </footer>
    )
}

export default Footer
