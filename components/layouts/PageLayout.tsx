import Head from "next/head";
import { FC } from "react";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

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
      <main>
        <Box marginTop="3%" marginLeft="3%" marginRight="3%">
          {children}
        </Box>
      </main>
    </>
  );
};

export default PageLayout;
