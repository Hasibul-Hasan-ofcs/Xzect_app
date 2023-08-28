"use client";
import Perks from "@/components/perks/Perks";
import styles from "./page.module.css";
import Certification from "@/components/certification/Certification";
import Content from "@/components/content/Content";

export default function Home() {
  return (
    <main className={styles.main}>
      <Content></Content>
      <Perks></Perks>
      <Certification></Certification>
    </main>
  );
}
