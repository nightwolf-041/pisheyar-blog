import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {  useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/footer/Footer'
import { faGoogle, faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faLocationArrow, faPhoneAlt, faRss, faSitemap } from "@fortawesome/free-solid-svg-icons";

import classes from './Layout.module.css'
import './Layout.css'

const Header = ({ title, children }) => {
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

	const headerIcon = home.childImageSharp.fixed;

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

    )
}

export default Header