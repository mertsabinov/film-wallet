import { HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent="center" marginTop="2%">
      <Link href="/">Home</Link>
      <Link href="/mylist">My List</Link>
    </HStack>
  );
};

export default Navbar;
