import type { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import PageLayout from "../components/layouts/PageLayout";
import MovieList from "../components/MovieList";
import { API } from "../config";
import { Button, HStack, Input, Skeleton } from "@chakra-ui/react";
import { FC } from "react";

type Movie = {
  id: string;
  title: string;
  image: string;
  image_target: string;
  api_path: string;
  imbd: string;
};

type IProps = {
  data: Movie[];
};

const Home: FC<IProps> = ({ data }) => {
  const [movies, setMovies] = useState(data || []);
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<Boolean>(false);

  const getMovies = async (search: string) => {
    const res = await fetch(API + search);
    const data = await res.json().then((res) => res.results);
    await setMovies(data);
  };
  const searchButton = async () => {
    await setMovies([]);
    if (search !== "") {
      setSearchStatus(true);
      await getMovies(search);
      setSearchStatus(false);
    }
  };

  return (
    <PageLayout pageTitle="film walet">
      <HStack>
        <Input
          backgroundColor="blackAlpha.200"
          textAlign="center"
          placeholder="exemple marvel"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => searchButton()}>Search</Button>
      </HStack>
      <Skeleton marginTop="3%" isLoaded={!searchStatus}>
        <MovieList itemList={movies} />
      </Skeleton>
    </PageLayout>
  );
};

export default Home;

export const getStaticProps: GetServerSideProps = async () => {
  const res = await fetch(API + "marvel");
  const data = await res.json().then((res) => res.results);
  return {
    props: {
      data,
    },
  };
};
