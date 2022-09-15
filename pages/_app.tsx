import type { AppProps } from "next/app";
import "styles/globals.scss";
import "styles/variable.scss";

import Layout from "layout";

function SimpleNeerajApp({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}

export default SimpleNeerajApp;
