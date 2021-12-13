import "../styles/globals.css";
import { AppProps } from "next/app";
import "../styles/slick.css";
import "slick-carousel/slick/slick.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
