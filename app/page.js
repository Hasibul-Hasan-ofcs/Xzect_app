"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  // useEffect(() => {
  //   const router = useRouter();
  //   router.push("/course");
  // }, []);

  return <main className={styles.main}></main>;
}
