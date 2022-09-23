import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Card from "./Card";

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
  const toast = useToast();

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
    toast({
      title: "watch list",
      description: "added to watch list",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
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
    toast({
      title: "Watched list",
      description: "added to watched list",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box>
      <SimpleGrid h="100%" columns={[2, null, 5]} spacing="5">
        {itemListFilter.map(({ title, image, id }) => (
          <Card
            id={id}
            title={title}
            image={image}
            addToWatchListButton={addToWatchList}
            addToWatchedListButton={addToWatchedList}
          />
        ))}
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
            transitionDuration="1s"
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default MovieList;
