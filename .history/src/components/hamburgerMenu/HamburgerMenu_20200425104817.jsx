import React from 'react'
import {  useStaticQuery, graphql } from 'gatsby';

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
            <div className={classes.hamburgerMenuItem}></div>
            <div className={classes.hamburgerMenuItem}></div>
            <div className={classes.hamburgerMenuItem}></div>
            <div className={classes.hamburgerMenuItem}></div>
            <div className={classes.hamburgerMenuItem}></div>
        </div>
    )
}

export default HamburgerMenu