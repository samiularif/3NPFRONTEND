import Link from "next/link";
import Headers from "./components/header";
export default function AboutUs() {
  return (
    <>
      <Headers title="About Us" />
      <h1> About Us</h1>
      <h2> Page 2 </h2>
      <Link href="/">Home</Link>
    </>
  );
}
