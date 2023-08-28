import React from "react";
import style from "./perks.module.css";
import { perksData } from "@/constants";

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
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perks;
