import { HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent="center" marginTop="2%">
      <Link href="/film-walet">Home</Link>
      <Link href="/film-walet/mywatchlist">My watchlist </Link>
      <Link href="/film-walet/watchedlist">Watched list</Link>
    </HStack>
  );
};

export default Navbar;
