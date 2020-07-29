import React, {useState} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import PerfectScrollbar from 'react-perfect-scrollbar'
import khale from '../../assets/images/khale.png'
import 'react-perfect-scrollbar/dist/css/styles.css';

const PostLeftside = () => {

    const { allRestApiPostGetMonthlyMostViewed, allRestApiPostGetWeeklyMostViewed } = useStaticQuery(
		graphql`
        {
            allRestApiPostGetMonthlyMostViewed {
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
                            category {
                                title
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
                            title
                            abstract
                            viewCount
                            modifiedDate
                            likeCount
                            document {
                                source
                            }
                            category {
                                title
                            }
                            slug
                        }
                    }
                }
            }                
        }
    `);
    const monthData = [...allRestApiPostGetMonthlyMostViewed.edges]
    let monthPosts = [...monthData[0].node.posts]
    let monthPostsFirstDoc = {...monthPosts[0].document}
    console.log(monthPostsFirstDoc);
    let monthPostsFirstCategory = {...monthPosts[0].category}

    const weeklyData = [...allRestApiPostGetWeeklyMostViewed.edges]
    let weeklyPosts = [...weeklyData[0].node.posts]
    console.log(weeklyPosts[0].title);
    let weeklyPostsFirstDoc = {...weeklyPosts[0].document}
    console.log(weeklyPostsFirstDoc);
    let weeklyPostsFirstCategory = {...weeklyPosts[0].category}

    let [weeklyOrMonth, setWeeklyOrMonth] = useState('weekly')

    const handleLoadWeeklyPosts = () => {
        setWeeklyOrMonth('weekly')
    }
    const handleLoadMonthPosts = () => {
        setWeeklyOrMonth('month')
    }

    return (
        <div className="single-post-left">
        <div className="single-post-left-container">
            <h4>منتخب ها</h4>
            <div className="single-post-left-buttons">
                <button className={
                    weeklyOrMonth === 'weekly' ?
                    "single-post-left-btn-right single-post-left-active-button" :
                    "single-post-left-btn-right"
                }
                onClick={handleLoadWeeklyPosts}>هفته</button>
                <button className={
                    weeklyOrMonth === 'month' ?
                    "single-post-left-btn-left single-post-left-active-button" :
                    "single-post-left-btn-left"
                }
                onClick={handleLoadMonthPosts}>ماه</button>
            </div>
            <div className="single-post-left-topic">
                <div className="single-post-left-topic-top">
                    <div className="single-post-left-topic-top-overlay"></div>
                    <img src={weeklyOrMonth === 'weekly' ?
                    weeklyPostsFirstDoc.source :
                    monthPostsFirstDoc.source 
                    } alt="" className="single-post-left-topic-top-img" />
                    <h5 className="single-post-left-topic-top-title">
                        {weeklyOrMonth === 'weekly' ?
                        weeklyPostsFirstCategory.title :
                        monthPostsFirstCategory.title
                        }
                    </h5>
                    <Link to={weeklyOrMonth === 'weekly' ?
                `/${weeklyPosts[0].slug}` :
                `/${monthPosts[0].slug}`
                } className="single-post-left-topic-top-subtitle">
                        {weeklyOrMonth === 'weekly' ?
                        weeklyPosts[0].title :
                        monthPosts[0].title
                        }
                    </Link>
                </div>
                <div className="single-post-left-topic-bottom">
                    <PerfectScrollbar>
                    {weeklyOrMonth === 'weekly' ?
                    weeklyPosts.map((post, index) => (
                        <Link to={`/${post.slug}`} className="single-post-left-topic-bottom-item"
                        key={index}>
                            <img src={post.document.source} alt=""
                            className="single-post-left-topic-bottom-item-img" />
                            <div className="single-post-left-topic-bottom-item-desc">
                                <h5 className="single-post-left-topic-bottom-item-desc-title">
                                    {post.category.title}
                                </h5>
                                <p className="single-post-left-topic-bottom-item-desc-subtitle">
                                    {post.title}
                                </p>
                            </div>
                        </Link>
                    ))
                    :
                    monthPosts.map((post, index) => (
                        <Link to={`/${post.slug}`} className="single-post-left-topic-bottom-item">
                            <img src={post.document.source} alt=""
                            className="single-post-left-topic-bottom-item-img" />
                            <div className="single-post-left-topic-bottom-item-desc">
                                <h5 className="single-post-left-topic-bottom-item-desc-title">
                                    {post.category.title}
                                </h5>
                                <p className="single-post-left-topic-bottom-item-desc-subtitle">
                                    {post.title}
                                </p>
                            </div>
                        </Link>
                    ))
                    }
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PostLeftside