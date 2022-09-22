import { Box, SimpleGrid, Text, Image, Button, HStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

type Movie = {
  id: string;
  title: string;
  image: string;
  image_target: string;
  api_path: string;
  imbd: string;
};

type costomMovie = {
  id: string;
  title: string;
  image: string;
};

type IProps = {
  itemList: Movie[];
};

const MovieList: FC<IProps> = ({ itemList }) => {
  const pageSize: number = itemList.length / 25;
  const [itemListFilter, setItemListFilter] = useState<Movie[]>([]);

  const pageLoader = (pageCount: number) => {
    let max = pageCount * 25;
    let min = max - 25;
    let newItemList: Movie[] = [];
    newItemList = itemList.slice(min, max);
    setItemListFilter(newItemList);
  };

  useEffect(() => {
    pageLoader(1);
  }, []);

  const addToWatchList = (title: string, image: string, id: string) => {
    const movie: costomMovie = {
      id: id,
      title: title,
      image: image,
    };
    try {
      let movieWatchList: costomMovie[] = JSON.parse(
        localStorage.getItem("watchList") || ""
      );
      movieWatchList.push(movie);
      localStorage.setItem("watchList", JSON.stringify(movieWatchList));
    } catch (error) {
      const tmpList = [];
      tmpList.push(movie);
      localStorage.setItem("watchList", JSON.stringify(tmpList));
    }
  };

  const addToWatchedList = (title: string, image: string, id: string) => {
    const movie: costomMovie = {
      id: id,
      title: title,
      image: image,
    };
    try {
      let movieWatchedList: costomMovie[] = JSON.parse(
        localStorage.getItem("watchedList") || ""
      );
      movieWatchedList.push(movie);
      localStorage.setItem("watchedList", JSON.stringify(movieWatchedList));
    } catch (error) {
      const tmpList = [];
      tmpList.push(movie);
      localStorage.setItem("watchedList", JSON.stringify(tmpList));
    }
  };

  return (
    <Box>
      <SimpleGrid columns={[2, null, 5]} spacing="5">
        {itemListFilter.map(({ title, image, id }) => (
          <Box
            key={id}
            boxShadow="xl"
            borderRadius="15px"
            backgroundColor="blackAlpha.200"
          >
            <Image w="100%" src={image} borderTopRadius="15px" />
            <Text h="10vh" textAlign="center" marginLeft="5%" marginRight="5%">
              {title}
            </Text>
            <Button
              w="100%"
              backgroundColor="blue.200"
              onClick={() => addToWatchList(title, image, id)}
              _hover={{ background: "orange.200" }}
            >
              add to watch list
            </Button>
            <Button
              w="100%"
              marginTop="5%"
              backgroundColor="blue.200"
              onClick={() => addToWatchedList(title, image, id)}
              _hover={{ background: "orange.200" }}
            >
              add to watched list
            </Button>
          </Box>
        ))}
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

export default MovieList;
