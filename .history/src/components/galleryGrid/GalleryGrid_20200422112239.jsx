import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import classes from './galleryGrid.module.css'

const gridGallery = () => {

    const { khale } = useStaticQuery(
		graphql`
			query {
				khale: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 60) {
							...GatsbyImageSharpFixed
						}
					}
				}
				footer: file(absolutePath: { regex: "/home-icon.png/" }) {
					childImageSharp {
						fixed(width: 110) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
    );
    const homeIcon = home.childImageSharp.fixed;
	const homeIconFooter = footer.childImageSharp.fixed;
    
    return(
        <div className={classes.gallery}>
            <div className={[classes.gridItem1, classes.gridItem].join(' ')}>

            </div>
            <div className={[classes.gridItem2, classes.gridItem].join(' ')}>

            </div>
            <div className={[classes.gridItem3, classes.gridItem].join(' ')}>

            <img src="" alt="" class="top-gallery-right-img" />
                <div class="top-gallery-overlay top-gallery-overlay-right"></div>
                <div class="top-gallery-right-desc">
                    این دوست عزیزی که میبینید شما در حال بغل کردن اونیکی دوست عزیز ما میباشه
                </div>
                <div class="top-gallery-right-info">
                    <div class="top-gallery-right-info-date">1396/5/8</div>
                    .
                    <div class="top-gallery-right-info-seen">
                        <i class="fas fa-eye top-gallery-right-info-seen-icon"></i>
                        <span class="top-gallery-right-info-seen-count">345</span>
                    </div>
                    .
                    <div class="top-gallery-right-info-read">
                        <i class="fab fa-readme top-gallery-right-info-read-icon"></i>
                        <span class="top-gallery-right-info-read-count">345</span>
                    </div>
                </div>
                <div class="top-gallery-right-socials">
                    <a class="top-gallery-right-socials-link">
                        <i class="fab fa-instagram top-gallery-right-socials-icon"></i>
                    </a>
                    <a class="top-gallery-right-socials-link">
                        <i class="fab fa-telegram-plane top-gallery-right-socials-icon"></i>
                    </a>
                    <a class="top-gallery-right-socials-link">
                        <i class="fab fa-twitter top-gallery-right-socials-icon"></i>
                    </a>
                    <a class="top-gallery-right-socials-link">
                        <i class="fab fa-google top-gallery-right-socials-icon"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default gridGallery