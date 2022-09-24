import { Box, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box paddingBottom="1%" position="relative">
      <HStack
        position="fixed"
        top="0"
        w="100%"
        backgroundColor="#392f5a"
        justifyContent="center"
        paddingTop="1%"
        paddingBottom="1%"
        boxShadow="xl"
        zIndex="6"
      >
        <Link
          href="/film-wallet"
          border="1px solid transparent"
          _hover={{ color: "#F4D06F", borderColor: "#F4D06F" }}
          transitionDuration="0.5s"
        >
          Home
        </Link>
        <Link
          href="/film-wallet/mywatchlist"
          border="1px solid transparent"
          _hover={{ color: "#F4D06F", borderColor: "#F4D06F" }}
          transitionDuration="0.5s"
        >
          My watchlist{" "}
        </Link>
        <Link
          href="/film-wallet/mywatchedlist"
          border="1px solid transparent"
          _hover={{ color: "#F4D06F", borderColor: "#F4D06F" }}
          transitionDuration="0.5s"
        >
          My Watched list
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
