import React from 'react';

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
          required
          className={classes.contactusBottomInputBoxInput}
        />
      </div>
    </div>
  );
};

export default ContactusBottom;
