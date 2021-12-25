import Navbar from "./navbar";
import Footer from "./footer";
import Meta from "../meta";
import Head from "next/head";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&family=Merriweather:ital,wght@0,300;0,900;1,300;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
