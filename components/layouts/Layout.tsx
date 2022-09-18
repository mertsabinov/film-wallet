import Head from "next/head";
import { FC } from "react";
import type { ReactNode } from "react";

type IProps = {
  children?: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Film walet</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
