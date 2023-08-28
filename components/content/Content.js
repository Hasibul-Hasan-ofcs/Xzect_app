import React from "react";
import style from "./content.module.css";
import { GoBookmark } from "react-icons/go";
import { PiShareFatLight } from "react-icons/pi";
import { Poppins } from "next/font/google";
import LeftMainContent from "./LeftMainContent";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Content = () => {
  return (
    <div className={`${style.content_main} ${poppins.className}`}>
      <h2 className={style.course_heading}>
        Full Stack Web Development Training (Student Offer)
      </h2>
      <div className={style.course_by}>
        <div className={style.left_portion}>
          <img src="/png/xzect-logo-secondary.png" />
          <p>
            By <b className="text-black">Xzect</b>
          </p>
          <p>
            Categories:{" "}
            <b className="text-black">Featured, Live, Software Development</b>
          </p>
        </div>
        <div className={style.right_portion}>
          <p>
            <GoBookmark></GoBookmark>
            <span>Wishlist</span>
          </p>
          <p>
            <PiShareFatLight></PiShareFatLight>
            <span>Share</span>
          </p>
        </div>
      </div>

      <div className={style.main_content_wrapper}>
        <LeftMainContent></LeftMainContent>

        <div className={style.right_main}></div>
      </div>
    </div>
  );
};

export default Content;
