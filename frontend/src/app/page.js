import Aboutus from "@/component/Aboutus";
import LandingPage from "../component/LandingPage";
import styles from "./page.module.css";
import Services from "@/component/Services";

import ContactUs from "@/component/ContactUs";

// import hero from 'hero.png';

export default function Home() {
  return (
    <div className="page ">
      <LandingPage />
      <Aboutus />
      <Services />
      <ContactUs />
    </div>
  );
}
