import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import khale from '../../assets/images/khale.png'

const PostLeftside = () => {
    return (
        <div className="single-post-left">
        <div className="single-post-left-container">
            <h4>منتخب ها</h4>
            <div className="single-post-left-buttons">
                <button className="single-post-left-btn-right">هفته</button>
                <button className="single-post-left-btn-left">ماه</button>
            </div>
            <div className="single-post-left-topic">
                <div className="single-post-left-topic-top">
                    <div className="single-post-left-topic-top-overlay"></div>
                    <img src={khale} alt="" className="single-post-left-topic-top-img" />
                    <h5 className="single-post-left-topic-top-title">تکنولوژی</h5>
                    <p className="single-post-left-topic-top-subtitle">ماشین برقی تسلا در نمایشگاهی برای دیدن گذاشته شد</p>
                </div>
                <div className="single-post-left-topic-bottom">
                    <Scrollbars
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={300}
                    thumbMinSize={30}
                    universal={true}
                    renderTrackHorizontal={({ style, ...props }) =>
                        <div {...props} style={{ ...style }}/>
                    }>
                        <div className="single-post-left-topic-bottom-item">
                            <img src={khale} alt=""
                            className="single-post-left-topic-bottom-item-img" />
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
                            <img src={khale} alt=""
                            className="single-post-left-topic-bottom-item-img" />
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
                            <img src={khale} alt=""
                            className="single-post-left-topic-bottom-item-img" />
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
                            <img src={khale} alt=""
                            className="single-post-left-topic-bottom-item-img" />
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
                            <img src={khale} alt=""
                            className="single-post-left-topic-bottom-item-img" />
                            <div className="single-post-left-topic-bottom-item-desc">
                                <h5 className="single-post-left-topic-bottom-item-desc-title">
                                    تکنولوژی
                                </h5>
                                <p className="single-post-left-topic-bottom-item-desc-subtitle">
                                    بهترین و با کیفیت ترین هدست هارا بررسی کنید
                                </p>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PostLeftside