import { Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import PageLayout from "../components/layouts/PageLayout";
import WatchList from "../components/WatchList";
const MyWatchlist = () => {
  return (
    <PageLayout pageTitle="My watchlist">
      <WatchList />
    </PageLayout>
  );
};

export default MyWatchlist;
