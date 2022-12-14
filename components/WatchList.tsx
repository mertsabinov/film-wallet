import {
  Box,
  SimpleGrid,
  Button,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import WatchCard from "../components/WatchCard";

type costomMovie = {
  id: string;
  title: string;
  image: string;
};

type IProps = {};

const WatchList: FC<IProps> = ({}) => {
  const [itemListFilter, setItemListFilter] = useState<costomMovie[]>([]);
  const [pageSize, setPageSize] = useState<number>(1);
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<costomMovie[]>([]);
  const toast = useToast();

  const pageLoader = async (pageCount: number) => {
    try {
      const getWatchList = JSON.parse(localStorage.getItem("watchList") || "");
      await setPageSize(Math.ceil(getWatchList.length / 25));
      let max = pageCount * 25;
      let min = max - 25;
      let newItemList: costomMovie[] = [];
      newItemList = getWatchList.slice(min, max);
      setItemListFilter(newItemList);
    } catch (error) {
      setPageSize(0);
    }
  };

  useEffect(() => {
    pageLoader(1);
  }, []);

  const searchMovie = async (value: string) => {
    if (value) {
      setSearchStatus(true);
      const getWatchList = await JSON.parse(
        localStorage.getItem("watchList") || ""
      );
      let tmpList = getWatchList.filter((item: costomMovie) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(tmpList);
    } else {
      setSearchStatus(false);
    }
  };

  const removeButton = async (id: string) => {
    const getWatchList = JSON.parse(localStorage.getItem("watchList") || "");
    const tmpList = getWatchList.filter((item: costomMovie) => item.id !== id);
    localStorage.setItem("watchList", JSON.stringify(tmpList));
    await pageLoader(1);
    setSearchStatus(false);
    toast({
      title: "Remove",
      description: "movie removed",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box>
      <Input
        onChange={(e) => searchMovie(e.target.value)}
        textAlign="center"
        placeholder="search"
      />
      <SimpleGrid marginTop="2.5%" columns={[2, null, 5]} spacing="5">
        {(!searchStatus ? itemListFilter : filterData).map(
          ({ title, image, id }) => (
            <WatchCard
              title={title}
              image={image}
              id={id}
              removeToList={removeButton}
            />
          )
        )}
      </SimpleGrid>
      <HStack justifyContent="center" paddingTop="5%" paddingBottom="3%">
        {Array.from({ length: pageSize }).map((_, index) => (
          <Button
            key={index}
            onClick={() => pageLoader(index + 1)}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="0.5s"
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default WatchList;
