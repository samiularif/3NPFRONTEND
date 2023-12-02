import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import AboutUs from "./aboutus";
import Headers from "./components/header";

export default function Home() {
  return (
    <>
      <Headers title="Home" />
      <h1> what is hydration error </h1>
      <Link href="aboutus">About Us</Link>
    </>
  );
}
