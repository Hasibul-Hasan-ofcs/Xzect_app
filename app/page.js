"use client";
import styles from "./page.module.css";
import Certification from "@/components/certification/Certification";

export default function Home() {
  return (
    <main className={styles.main}>
      <Certification></Certification>
    </main>
  );
}
