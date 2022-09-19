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
              _hover={{ background: "orange.200" }}
            >
              add to list
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <HStack justifyContent="center" paddingTop="5%" paddingBottom="3%">
        {Array.from({ length: pageSize }).map((_, index) => (
          <Button onClick={() => pageLoader(index + 1)}>{index + 1}</Button>
        ))}
      </HStack>
    </Box>
  );
};

export default MovieList;
