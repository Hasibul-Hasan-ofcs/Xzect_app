import React from "react";
import style from "./perks.module.css";
import { perksData } from "@/constants";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Perks = () => {
  return (
    <div className={style.perks_box}>
      {perksData.map((el, indx) => (
        <div className={style.perks_card_box} key={indx}>
          <div className={style.perks_card}>
            <div className={style.upper_portion}>
              <div>{el.img}</div>
            </div>
            <div className={style.lower_portion}>
              <h3 className={poppins.className}>{el.title}</h3>
              <p className={poppins.className}>{el.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perks;
