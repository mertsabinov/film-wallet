import { Box, Text, Button, filter } from "@chakra-ui/react";
import { FC, useState } from "react";
type IProps = {
  id: string;
  title: string;
  image: string;
  removeToList: (id: string) => void;
};

const WatchCard: FC<IProps> = ({ id, title, image, removeToList }) => {
  const [hoverStatus, setHoverStatus] = useState<boolean>(false);
  return (
    <Box
      onMouseOver={() => setHoverStatus(true)}
      onMouseOut={() => setHoverStatus(false)}
    >
      <Box
        key={id}
        h="60vh"
        boxShadow="xl"
        borderRadius="15px"
        backgroundImage={image}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        filter={hoverStatus ? "blur(8px) brightness(0.90)" : "blur(0px)"}
        transitionDuration="1s"
      ></Box>
      <Box
        position="relative"
        zIndex={1}
        bottom="15vh"
        opacity={hoverStatus ? 1 : 0}
        transitionDuration="1s"
      >
        <Button
          w="100%"
          marginTop="5%"
          onClick={() => removeToList(id)}
          color="#F4D06F"
          backgroundColor="transparent"
          border="2px solid #F4D06F"
          _hover={{
            backgroundColor: "#F4D06F",
            color: "#392f5a",
          }}
          transitionDuration="1s"
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default WatchCard;
