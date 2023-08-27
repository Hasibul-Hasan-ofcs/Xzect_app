import React from "react";
import style from "./certification.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Certification = () => {
  return (
    <div className={style.certification}>
      <div className={poppins.className}>
        <h1 className={style.h1}>Get certificates on course completion</h1>
      </div>
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
