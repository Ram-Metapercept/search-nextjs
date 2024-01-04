import ScrollToTop from "@/hooks/scroll-to-top";
import "@/src/styles/index.scss";
import CookiesObj from "../common/cookies";
import Footer from "../layout/footers/footer-12-black";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import ChatBot from "../components/custom/chatbot";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps, router }) {
  useScrollRestoration(router);
  return (
    <>
      <style jsx global>
        {`
          strong,
          b {
            font-weight: 400;
          }
        `}
      </style>
      <CookiesObj />
      <Component {...pageProps} />
      <ScrollToTop />
      <ChatBot />
      <Footer />
    </>
  );
}
