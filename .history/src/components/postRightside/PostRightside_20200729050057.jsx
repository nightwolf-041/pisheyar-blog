import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import khale from '../../assets/images/khale.png';

const PostRightside = () => {
  return (
    <div className="single-post-right">
      <div className="single-post-right-container">
        <div className="single-post-right-sharebox">
          <div className="single-post-right-sharebox-top">
            <span className="single-post-right-sharebox-top-value">0</span>
            <span className="single-post-right-sharebox-top-label">اشتراک</span>
          </div>
          <div className="single-post-right-sharebox-bottom">
            <div className="single-post-right-sharebox-bottom-part">
              <FontAwesomeIcon
                icon={faInstagram}
                className="single-post-right-sharebox-bottom-part-icon"
              />
            </div>
            <div className="single-post-right-sharebox-bottom-part2">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="single-post-right-sharebox-bottom-part-icon"
              />
            </div>
          </div>
        </div>
        <div className="single-post-right-content">
          <div className="single-post-right-content-top">
            <div className="single-post-right-content-top-divider"></div>
            <div className="single-post-right-content-top-contentTitle">
              مطلب
            </div>
            <div className="single-post-right-content-top-contentValue">
              {props.postCategory}
            </div>
          </div>
          {/* <div className="single-post-right-content-bottom">
                    <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                    <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                    <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default PostRightside;
