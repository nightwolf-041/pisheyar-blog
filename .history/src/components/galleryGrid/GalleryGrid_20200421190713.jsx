import React from 'react'
import classes from './galleryGrid.module.css'

const gridGallery = () => (
    <div className={classes.gallery}>
        <div className={[classes.gridItem1, classes.gridItem].join(' ')}>

        </div>
        <div className={[classes.gridItem2, classes.gridItem].join(' ')}>

        </div>
        <div className={[classes.gridItem3, classes.gridItem].join(' ')}>

        </div>
    </div>
    <div className={classes.IEGallery}>
         <div class="top-gallery-left">
            <div class="top-gallery-left-top">
            </div>
            <div class="top-gallery-left-bottom">
            </div>
        </div>
        <div class="top-gallery-right"></div>
    </div>
)

export default gridGallery