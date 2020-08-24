import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PerfectScrollbar from "react-perfect-scrollbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons"
import {
  faAngleLeft,
  faHome,
  faLayerGroup,
  faFilm,
  faNewspaper,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons"

import "react-perfect-scrollbar/dist/css/styles.css"
import classes from "./hamburgerMenu.module.css"

const HamburgerMenu = (props) => {
  const { header } = useStaticQuery(
    graphql`
      query {
        header: file(absolutePath: { regex: "/logo-yellow.png/" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const headerIcon = header.childImageSharp.fixed

  let [toggle, setToggle] = useState(false)

  const dropdownToggler = () => {
    setToggle((toggle) => !toggle)
  }

  return (
    <>
      <div
        className={
          !props.show ? classes.hamburgerMenu : classes.hamburgerMenuToggle
        }
      >
        <PerfectScrollbar>
          <div className={classes.hamburgerMenuImageBox}>
            <Img fixed={headerIcon} alt="" />
          </div>
          <div
            className={
              !props.show
                ? classes.hamburgerMenuItem
                : classes.hamburgerMenuItemAnimate
            }
          >
            <span>خانه</span>
            <FontAwesomeIcon
              icon={faHome}
              className={classes.hamburgerMenuItemIcon}
            />
          </div>
          {/* <div className={!props.show ?
                [classes.hamburgerMenuItem, classes.hamburgerMenuDropItem].join(' ')
                : [classes.hamburgerMenuItemAnimate, classes.hamburgerMenuDropItem].join(' ')
            }
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
                    <span>تاسیسات</span>
                    <span>حمل و نقل</span>
                    <span>ساخت و ساز</span>
                    <span>شیمیایی</span>
                </div>

                <div className={!props.show ?
                    classes.hamburgerMenuItem
                    :classes.hamburgerMenuItemAnimate
                    }>
                    <span>فیلم</span>
                    <FontAwesomeIcon icon={faFilm} className={classes.hamburgerMenuItemIcon} />
                </div>
                <div className={!props.show ?
                    classes.hamburgerMenuItem
                    :classes.hamburgerMenuItemAnimate
                    }>
                    <span>اخبار</span>
                    <FontAwesomeIcon icon={faNewspaper} className={classes.hamburgerMenuItemIcon} />
                </div> */}
          <div
            className={
              !props.show
                ? classes.hamburgerMenuItem
                : classes.hamburgerMenuItemAnimate
            }
          >
            <span>سایت پیشه یار</span>
            <FontAwesomeIcon
              icon={faInternetExplorer}
              className={classes.hamburgerMenuItemIcon}
            />
          </div>
          <div
            className={
              !props.show
                ? classes.hamburgerMenuItem
                : classes.hamburgerMenuItemAnimate
            }
          >
            <span>درباره ما</span>
            <FontAwesomeIcon
              icon={faAddressCard}
              className={classes.hamburgerMenuItemIcon}
            />
          </div>
        </PerfectScrollbar>
      </div>
    </>
  )
}

export default HamburgerMenu
