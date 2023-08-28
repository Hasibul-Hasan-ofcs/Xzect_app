import React from "react";
import style from "./css/content.module.css";
import { poppins } from "@/font";
import Link from "next/link";
import {
  courseHighlights,
  courseRequirements,
  courseSuitability,
  courseTags,
  courseTimings,
} from "@/constants";

const RightMainContent = () => {
  return (
    <div className={`${style.right_main} ${poppins.className}`}>
      <div className={style.topBar}>
        <p>A course by</p>
        <div>
          <img src="/png/xzect-logo-secondary.png" />
          <p>Xzect</p>
        </div>
      </div>

      {/* suitability */}
      <div className={style.suitability}>
        <h3>{courseSuitability.title}</h3>
        <ul>
          {courseSuitability.list.map((el, indx) => (
            <li key={indx}>{el}</li>
          ))}
        </ul>
      </div>

      <div className={style.highlights}>
        <h3>{courseHighlights.title}</h3>
        <ul>
          {courseHighlights.list.map((el, indx) => (
            <li key={indx}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={style.timings}>
        <h3>{courseTimings.title}</h3>
        <ul>
          {courseTimings.list.map((el, indx) => (
            <li key={indx}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={style.requirements}>
        <h3>{courseRequirements.title}</h3>
        <ul>
          {courseRequirements.list.map((el, indx) => (
            <li key={indx}>{el}</li>
          ))}
        </ul>
      </div>

      <div className={style.tags}>
        <h3>{courseTags.title}</h3>
        <div>
          {courseTags.list.map((el, indx) => (
            <Link key={indx} href="">
              {el}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightMainContent;
