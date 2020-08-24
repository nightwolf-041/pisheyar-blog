import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PerfectScrollbar from 'react-perfect-scrollbar';
import khale from '../../assets/images/khale.png';
import 'react-perfect-scrollbar/dist/css/styles.css';

const PostLeftside = () => {
  const {
    allRestApiPostGetMonthlyMostViewed,
    allRestApiPostGetWeeklyMostViewed,
  } = useStaticQuery(
    graphql`
      {
        allRestApiPostGetMonthlyMostViewed {
          edges {
            node {
              posts {
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
        allRestApiPostGetWeeklyMostViewed {
          edges {
            node {
              posts {
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
  const monthData = [...allRestApiPostGetMonthlyMostViewed.edges];
  let monthPosts = [...monthData[0].node.posts];
  const weeklyData = [...allRestApiPostGetWeeklyMostViewed.edges];
  let weeklyPosts = [...weeklyData[0].node.posts];

  return (
    <div className="single-post-left">
      <div className="single-post-left-container">
        <h4>منتخب ها</h4>
        <div className="single-post-left-buttons">
          <button
            className="single-post-left-btn-right"
            onClick={handleLoadWeeklyPosts}
          >
            هفته
          </button>
          <button
            className="single-post-left-btn-left"
            onClick={handleLoadMonthPosts}
          >
            ماه
          </button>
        </div>
        <div className="single-post-left-topic">
          <div className="single-post-left-topic-top">
            <div className="single-post-left-topic-top-overlay"></div>
            <img
              src={khale}
              alt=""
              className="single-post-left-topic-top-img"
            />
            <h5 className="single-post-left-topic-top-title">تکنولوژی</h5>
            <p className="single-post-left-topic-top-subtitle">
              ماشین برقی تسلا در نمایشگاهی برای دیدن گذاشته شد
            </p>
          </div>
          <div className="single-post-left-topic-bottom">
            <PerfectScrollbar>
              <div className="single-post-left-topic-bottom-item">
                <img
                  src={khale}
                  alt=""
                  className="single-post-left-topic-bottom-item-img"
                />
                <div className="single-post-left-topic-bottom-item-desc">
                  <h5 className="single-post-left-topic-bottom-item-desc-title">
                    تکنولوژی
                  </h5>
                  <p className="single-post-left-topic-bottom-item-desc-subtitle">
                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                  </p>
                </div>
              </div>
              <div className="single-post-left-topic-bottom-item">
                <img
                  src={khale}
                  alt=""
                  className="single-post-left-topic-bottom-item-img"
                />
                <div className="single-post-left-topic-bottom-item-desc">
                  <h5 className="single-post-left-topic-bottom-item-desc-title">
                    تکنولوژی
                  </h5>
                  <p className="single-post-left-topic-bottom-item-desc-subtitle">
                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                  </p>
                </div>
              </div>
              <div className="single-post-left-topic-bottom-item">
                <img
                  src={khale}
                  alt=""
                  className="single-post-left-topic-bottom-item-img"
                />
                <div className="single-post-left-topic-bottom-item-desc">
                  <h5 className="single-post-left-topic-bottom-item-desc-title">
                    تکنولوژی
                  </h5>
                  <p className="single-post-left-topic-bottom-item-desc-subtitle">
                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                  </p>
                </div>
              </div>
              <div className="single-post-left-topic-bottom-item">
                <img
                  src={khale}
                  alt=""
                  className="single-post-left-topic-bottom-item-img"
                />
                <div className="single-post-left-topic-bottom-item-desc">
                  <h5 className="single-post-left-topic-bottom-item-desc-title">
                    تکنولوژی
                  </h5>
                  <p className="single-post-left-topic-bottom-item-desc-subtitle">
                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                  </p>
                </div>
              </div>
              <div className="single-post-left-topic-bottom-item">
                <img
                  src={khale}
                  alt=""
                  className="single-post-left-topic-bottom-item-img"
                />
                <div className="single-post-left-topic-bottom-item-desc">
                  <h5 className="single-post-left-topic-bottom-item-desc-title">
                    تکنولوژی
                  </h5>
                  <p className="single-post-left-topic-bottom-item-desc-subtitle">
                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                  </p>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLeftside;
