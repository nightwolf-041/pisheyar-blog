import React from 'react'
import classes from './galleryGrid.module.css'

const gridGallery = () => (
    <div className={classes.gallery}>
        <p className={classes.fff}>
            asdsadasdasdsadasdasasdadssad
        </p>
        <div className={[classes.gridItem1, classes.gridItem].join(' ')}>

        </div>
        <div className={[classes.gridItem2, classes.gridItem].join(' ')}>

        </div>
        <div className={[classes.gridItem3, classes.gridItem].join(' ')}>

        </div>
    </div>
)

export default gridGallery