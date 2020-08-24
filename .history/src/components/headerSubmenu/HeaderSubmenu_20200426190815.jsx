import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css';

import khale from '../../assets/images/khale.png';
import rovina from '../../assets/images/rovina.png';

const HeaderSubmenu = (props) => (
  <div
    className={
      props.state ? classes.headerSubMenu : classes.headerSubMenuToggle
    }
  >
    <div className={classes.headerSubMenuLeft}>
      <div className={classes.headerSubMenuLeftItem}>
        <img
          src={rovina}
          alt=""
          className={classes.headerSubMenuLeftItemImage}
        />
        <div
          className={[
            classes.headerSubMenuLeftItemBottom,
            classes.headerSubMenuLeftItemBottomLeft,
          ].join(' ')}
        >
          <h4 className={classes.headerSubMenuLeftItemTitle}>
            بهترین و با کیفیت ترین هدست هارا از ما بخواهید
          </h4>
          <div className={classes.headerSubMenuLeftItemInfobox}>
            <span className={classes.headerSubMenuLeftItemDate}>6 روز پیش</span>
            .
            <div className={classes.headerSubMenuLeftItemlikeBox}>
              <FontAwesomeIcon
                icon={faHeart}
                className={classes.headerSubMenuLeftItemlikeIcon}
              />
              <span>120</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.headerSubMenuLeftItem}>
        <img
          src={khale}
          alt=""
          className={classes.headerSubMenuLeftItemImage}
        />
        <div className={classes.headerSubMenuLeftItemBottom}>
          <h4 className={classes.headerSubMenuLeftItemTitle}>
            بهترین و با کیفیت ترین هدست هارا از ما بخواهید
          </h4>
          <div className={classes.headerSubMenuLeftItemInfobox}>
            <span className={classes.headerSubMenuLeftItemDate}>6 روز پیش</span>
            .
            <div className={classes.headerSubMenuLeftItemlikeBox}>
              <FontAwesomeIcon
                icon={faHeart}
                className={classes.headerSubMenuLeftItemlikeIcon}
              />
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
);

export default HeaderSubmenu;
