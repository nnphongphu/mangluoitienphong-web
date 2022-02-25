import "../styles/globals.css";
import { AppProps } from "next/app";
import "../styles/slick.css";
import "slick-carousel/slick/slick.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
