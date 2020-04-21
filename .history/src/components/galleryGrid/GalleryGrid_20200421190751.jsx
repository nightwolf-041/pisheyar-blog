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
         <div className={classes.IEGalleryLeft}>
            <div className={classes.IEGalleryLeftTop}>
            </div>
            <div className={classes.IEGalleryLeftBottom}>
            </div>
        </div>
        <div class="top-gallery-right"></div>
    </div>
)

export default gridGallery