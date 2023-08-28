"use client";
import Perks from "@/components/perks/Perks";
import styles from "./page.module.css";
import Certification from "@/components/certification/Certification";

export default function Home() {
  return (
    <main className={styles.main}>
      <Perks></Perks>
      <Certification></Certification>
    </main>
  );
}
