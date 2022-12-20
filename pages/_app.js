import "../styles/globals.css";
// Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// END Font Awesome CSS

// AOS Library
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// END AOS Library

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      mirror: true,
      once: false,
      duration: 1000,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
