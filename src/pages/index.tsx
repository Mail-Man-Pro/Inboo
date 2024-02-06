import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import styles from "./index.module.scss"

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto">
        <div className={styles.hero}>
          <Hero />
        </div>
      </div>
    </main>
  );
}
