"use client";
import React, { useContext } from "react";
import Image from "next/image";
import style from "./navBar.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MainContext } from "@/providers/ContextProvider";

const NavBar = () => {
  const { setSideBarActive } = useContext(MainContext);

  const sideBarOpenHandler = () => {
    setSideBarActive(true);
    console.log("clicked");
  };

  return (
    <nav className={style.navBar}>
      <div className="img-container">
        <Image
          src="/png/xzect-logo-title-light.png"
          alt="website main logo"
          height="100"
          width="135"
          className={style.mainLogo}
          priority
        />
      </div>

      <div className={style.nav_items}>
        <div className={style.non_sp_items}>
          <Link href="" className={style.a}>
            Blog
          </Link>
          <Link href="" className={style.a}>
            Xzect.com
          </Link>
          <Link href="" className={style.a}>
            Courses
          </Link>
          <Link href="" className={style.a}>
            Contact
          </Link>
        </div>
        <Link href="" className={style.login_btn}>
          Login
        </Link>
        <button className={style.hamburger} onClick={sideBarOpenHandler}>
          <RxHamburgerMenu></RxHamburgerMenu>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
