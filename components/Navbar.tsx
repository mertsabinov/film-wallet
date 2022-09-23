import { HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent="center" marginTop="2%">
      <Link href="/film-wallet">Home</Link>
      <Link href="/film-wallet/mywatchlist">My watchlist </Link>
      <Link href="/film-wallet/mywatchedlist">My Watched list</Link>
    </HStack>
  );
};

export default Navbar;
