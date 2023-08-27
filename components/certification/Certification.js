import React from "react";
import style from "./certification.module.css";

const Certification = () => {
  return (
    <div className={style.certification}>
      <h1 className={style.h1}>Get certificates on course completion</h1>
      <p className={style.p}>
        Receive Certificates When You Successfully Complete Our Courses,
        Validating Your Achievements and Skill Development.
      </p>
      <img
        src="/jpg/dummy-certificate-768x548.jpg"
        alt="dummy certificate"
        className={style.certificate}
      />
    </div>
  );
};

export default Certification;
