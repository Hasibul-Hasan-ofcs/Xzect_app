import React from "react";
import style from "./css/content.module.css";
import { aboutCourseData, learn_stacks } from "@/constants";
import AccordionComponent from "./AccordionComponent";
import { BsBarChart } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";

const LeftMainContent = () => {
  return (
    <div className={style.left_main}>
      <img
        src="/jpg/full-stack-web-development-student-offer.jpg"
        className={style.course_img}
      />
      <div className={style.price}>
        <p className={style.offer_price}>₹7,000.00</p>
        <p className={style.original_price}>₹24,000.00</p>
      </div>
      <div className={style.add_cart_btn_wrapper}>
        <button className={style.add_cart_btn}>Add to cart</button>
      </div>
      <div className={style.course_status_wrapper}>
        <p className={style.course_status}>
          <span>
            <BsBarChart></BsBarChart>
          </span>{" "}
          All Levels
        </p>
        <p className={style.course_status}>
          <span>
            <BiTimeFive></BiTimeFive>
          </span>{" "}
          12 Month Duration
        </p>
        <p className={style.course_status}>
          <span>
            <HiRefresh></HiRefresh>
          </span>{" "}
          August 28, 2023 Last Updated
        </p>
      </div>
      <div className={style.about_course}>
        <h1 className={style.heading_text}>About Course</h1>
        <h2 className={style.heading_text}>
          Training will start from: 09 September 2023.
        </h2>
        <p>{aboutCourseData?.str}</p>
      </div>

      <div className={style.what_to_learn}>
        <h2 className={style.heading_text}>What Will You Learn?</h2>
        <div className={style.learn_stack}>
          <ul className={style.stack1}>
            {learn_stacks.stack1.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
          <ul className={style.stack2}>
            {learn_stacks.stack2.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
          <ul className={style.stack3}>
            {learn_stacks.stack3.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className={style.heading_text}>Course Content</h2>
        <AccordionComponent></AccordionComponent>
      </div>
    </div>
  );
};

export default LeftMainContent;
