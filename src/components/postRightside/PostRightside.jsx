import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { TelegramShareButton, WhatsappShareButton } from 'react-share';

import khale from '../../assets/images/khale.png';

const PostRightside = (props) => {
  return (
    <div className="single-post-right">
      <div className="single-post-right-container">
        <div className="single-post-right-sharebox">
          <div className="single-post-right-sharebox-top">
            <span className="single-post-right-sharebox-top-value">0</span>
            <span className="single-post-right-sharebox-top-label">اشتراک</span>
          </div>
          <div className="single-post-right-sharebox-bottom">
            <div className="single-post-right-sharebox-bottom-part2">
              <TelegramShareButton
                url={props.postUrL}
                quote={props.postTitle}
                className="post-right-share-button"
              >
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="single-post-right-sharebox-bottom-part-icon"
                />
              </TelegramShareButton>
            </div>
            <div className="single-post-right-sharebox-bottom-part2">
              <WhatsappShareButton
                url={props.postUrL}
                quote={props.postTitle}
                className="post-right-share-button"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="single-post-right-sharebox-bottom-part-icon"
                />
              </WhatsappShareButton>
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
