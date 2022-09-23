import Head from "next/head";
import { FC } from "react";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type IProps = {
  children?: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Film wallet</title>
      </Head>
      <Box h="100%" backgroundColor="#392f5a" color="white">
        {children}
      </Box>
    </>
  );
};

export default Layout;
