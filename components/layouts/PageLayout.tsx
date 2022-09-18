import Head from "next/head";
import { FC } from "react";
import type { ReactNode } from "react";

type IProps = {
  children?: ReactNode;
  pageTitle: string;
};

const PageLayout: FC<IProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
