import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

type costomMovie = {
  id: string;
  title: string;
  image: string;
};

type IProps = {};

const WatchedList: FC<IProps> = ({}) => {
  const [itemListFilter, setItemListFilter] = useState<costomMovie[]>([]);
  const [pageSize, setPageSize] = useState<number>(1);
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<costomMovie[]>([]);
  const toast = useToast();

  const pageLoader = async (pageCount: number) => {
    try {
      const getWatchedList = JSON.parse(
        localStorage.getItem("watchedList") || ""
      );
      await setPageSize(Math.ceil(getWatchedList.length / 25));
      let max = pageCount * 25;
      let min = max - 25;
      let newItemList: costomMovie[] = [];
      newItemList = getWatchedList.slice(min, max);
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
      const getWatchedList = await JSON.parse(
        localStorage.getItem("watchedList") || ""
      );
      let tmpList = getWatchedList.filter((item: costomMovie) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(tmpList);
    } else {
      setSearchStatus(false);
    }
  };

  const removeButton = async (id: string) => {
    const getWatchedList = JSON.parse(
      localStorage.getItem("watchedList") || ""
    );
    const tmpList = getWatchedList.filter(
      (item: costomMovie) => item.id !== id
    );
    localStorage.setItem("watchedList", JSON.stringify(tmpList));
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
            <Box
              key={id}
              boxShadow="xl"
              borderRadius="15px"
              backgroundColor="blackAlpha.200"
            >
              <Image w="100%" src={image} borderTopRadius="15px" />
              <Text
                h="10vh"
                textAlign="center"
                marginLeft="5%"
                marginRight="5%"
              >
                {title}
              </Text>
              <Button
                onClick={() => removeButton(id)}
                w="100%"
                backgroundColor="red.200"
                _hover={{ background: "red.100" }}
              >
                Remove
              </Button>
            </Box>
          )
        )}
      </SimpleGrid>
      <HStack justifyContent="center" paddingTop="5%" paddingBottom="3%">
        {Array.from({ length: pageSize }).map((_, index) => (
          <Button key={index} onClick={() => pageLoader(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default WatchedList;
