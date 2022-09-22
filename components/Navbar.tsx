import { HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent="center" marginTop="2%">
      <Link href="/">Home</Link>
      <Link href="/mywatchlist">My watchlist </Link>
      <Link href="/watchedlist">Watched list</Link>
    </HStack>
  );
};

export default Navbar;
