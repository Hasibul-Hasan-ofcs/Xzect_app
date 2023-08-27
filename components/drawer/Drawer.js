"use client";
import React, { useContext } from "react";
import style from "./drawer.module.css";
import { MainContext } from "@/providers/ContextProvider";
import { RxCross1, RxExit } from "react-icons/rx";
import Link from "next/link";

const Drawer = () => {
  const { sideBarActive, setSideBarActive } = useContext(MainContext);

  let cstmStyle, overlayStyle, closeBtnStyle;

  if (sideBarActive) {
    cstmStyle = {
      display: "block",
      left: 0,
    };

    overlayStyle = {
      display: "block",
    };

    closeBtnStyle = {
      display: "block",
    };
  }

  const closeSideBarHandler = () => {
    setSideBarActive(false);
  };

  return (
    <>
      <div
        className={style.overlay}
        style={overlayStyle}
        onClick={closeSideBarHandler}
      ></div>
      <button
        className={style.close_sidebar_btn}
        style={closeBtnStyle}
        onClick={closeSideBarHandler}
      >
        <RxCross1></RxCross1>
      </button>
      <div className={style.drawer} style={cstmStyle}>
        <div className={style.drawer_items}>
          <Link href="" className={style.bs_common}>
            Blog
          </Link>
          <Link href="" className={style.bs_common}>
            Xzect.com
          </Link>
          <Link href="" className={style.bs_common}>
            Courses
          </Link>
          <Link href="" className={style.bs_common}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Drawer;
