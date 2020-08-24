import React from 'react';

import classes from './contactusBottom.module.css';

const ContactusBottom = () => {
  return (
    <div className={classes.contactusBottom}>
      <h4 className={classes.contactusBottomTitle}>بروز باشید</h4>
      <p className={classes.contactusBottomSubtitle}>
        ایمیل خود را وارد کنید تا از اخبار بلاگ ما مطلع شوید
      </p>
      <div className={classes.contactusBottomInputBox}>
        <button className={classes.contactusBottomInputBoxButton}>عضویت</button>
        <input
          type="email"
          placeholder="آدرس ایمیل شما"
          className={classes.contactusBottomInputBoxInput}
        />
      </div>
    </div>
  );
};

export default ContactusBottom;
