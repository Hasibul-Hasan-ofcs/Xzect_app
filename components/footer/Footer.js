import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import {
  aboutFooterData,
  coursesFooterData,
  footerDescription1,
  footerDescription2,
} from "@/constants";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.description_contact_box}>
          <Image
            src="/png/xzect-logo-title-light.png"
            alt="website main logo"
            height="150"
            width="235"
            className={style.mainLogo}
            priority
          />
          <p className={style._header}>
            Unlock Your Potential with Xzect's Dynamic Courses
          </p>

          <p className={style.footerDescription1}>{footerDescription1.str}</p>
          <br />

          <p className={style.footerDescription2}>{footerDescription2.str}</p>
          <br />

          <p className={style.contact_data}>+91 98188 06393</p>
          <p className={style.contact_data}>contact@xzect.com</p>
        </div>

        <div className={style.courses}>
          <p className={style._header}>Courses</p>
          {coursesFooterData?.arr?.map((el, indx) => (
            <p key={indx}>{el}</p>
          ))}
        </div>
        <div className={style.about}>
          <p className={style._header}>About</p>
          {aboutFooterData?.arr?.map((el, indx) => (
            <p key={indx}>{el}</p>
          ))}
        </div>
      </div>
      <div className={style.copyright}>
        <p>Main Website (www.xzect.com)</p>
        <p>© 2018 - 2023. Xzect Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
