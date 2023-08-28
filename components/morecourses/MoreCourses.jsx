import React from "react";
import style from "./moreCourses.module.css";

const MoreCourses = () => {
  return (
    <div className={style.more_courses}>
      <h1>More Related Courses</h1>
      <div className={style.course_box}>
        <div className={style.card}>
          <img src="/jpg/3d-printing-course.jpg" />
          <h3>3D Printing Course with Fusion 360</h3>
          <button>View Course</button>
        </div>
        <div className={style.card}>
          <img src="/jpg/magento-developmet-course.jpg" />
          <h3>Magento Development Course</h3>
          <button>View Course</button>
        </div>
      </div>
    </div>
  );
};

export default MoreCourses;
