// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Navbar />
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
