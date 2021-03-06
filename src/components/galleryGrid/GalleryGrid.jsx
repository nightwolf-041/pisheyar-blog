import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { TelegramShareButton, WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faTelegramPlane,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCommentSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import classes from './galleryGrid.module.css';

const GridGallery = () => {
  const { allRestApiPostGetIndexesAnonymous } = useStaticQuery(
    graphql`
      {
        allRestApiPostGetIndexesAnonymous {
          edges {
            node {
              posts {
                title
                abstract
                viewCount
                modifiedDate
                likeCount
                document {
                  source
                }
                slug
              }
            }
          }
        }
      }
    `
  );
  const data = [...allRestApiPostGetIndexesAnonymous.edges];
  let posts = [...data[0].node.posts];

  let [runtimeData, setRuntimeData] = useState([]);

  useEffect(() => {
    axios
      .get('http://185.211.59.237/Post/GetIndexesAnonymous')
      .then((res) => {
        setRuntimeData(res.data.posts);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={classes.gridGallery}>
      <div className={classes.gridGalleryLeft}>
        <Link to={`/${posts[0].slug}`} className={classes.gridGalleryLeftTop}>
          <img
            src={posts[0].document.source}
            alt=""
            className={classes.gridGalleryLeftTopImage}
          />
          <div className={classes.gridGalleryOverlay}></div>
          <div className={classes.gridGalleryLeftTopDesc}>{posts[0].title}</div>
        </Link>
        <Link
          to={`/${posts[1].slug}`}
          className={classes.gridGalleryLeftBottom}
        >
          <img
            src={posts[1].document.source}
            alt=""
            className={classes.gridGalleryLeftBottomImage}
          />
          <div className={classes.gridGalleryOverlay}></div>
          <div className={classes.gridGalleryLeftBottomDesc}>
            {posts[1].title}
          </div>
        </Link>
      </div>

      <div className={classes.gridGalleryRight}>
        <img
          src={posts[2].document.source}
          alt=""
          className={classes.gridGalleryRightImg}
        />
        <div className={classes.gridGalleryOverlay}></div>
        <Link to={`/${posts[2].slug}`} className={classes.gridGalleryRightDesc}>
          {posts[2].title}
        </Link>
        <div className={classes.gridGalleryRightInfo}>
          <div className={classes.gridGalleryRightInfoDate}>
            {posts[2].modifiedDate}
          </div>
          .
          <div className={classes.gridGalleryRightInfoSeen}>
            <FontAwesomeIcon
              icon={faEye}
              className={classes.gridGalleryRightInfoSeenIcon}
            />
            <span className={classes.gridGalleryRightInfoSeenCount}>
              {/* {posts[2].viewCount} */}
              {runtimeData.length > 0 && runtimeData[2].viewCount}
            </span>
          </div>
          .
          <div className={classes.gridGalleryRightInfoRead}>
            <FontAwesomeIcon
              icon={faCommentSlash}
              className={classes.gridGalleryRightInfoReadIcon}
            />
            <span className={classes.gridGalleryRightInfoReadCount}>
              {/* {posts[2].likeCount} */}
              {runtimeData.length > 0 && runtimeData[2].likeCount}
            </span>
          </div>
        </div>
        <div className={classes.gridGalleryRightSocials}>
          <a className={classes.gridGalleryRightSocialsLink}>
            <TelegramShareButton
              url={`http://mag.pisheplus.com/${posts[2].slug}`}
              quote={posts[2].title}
              className="grid-gallery-share-button"
            >
              <FontAwesomeIcon
                icon={faTelegramPlane}
                className={classes.gridGalleryRightSocialsIcon}
              />
            </TelegramShareButton>
          </a>
          <a className={classes.gridGalleryRightSocialsLink}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={classes.gridGalleryRightSocialsIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridGallery;
