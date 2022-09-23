import { Box, Button, HStack, Image, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const Banner = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [img1, setImg1] = useState("https://wallpaper.dog/large/5482595.jpg");
  const [img2, setImg2] = useState(
    "https://images6.alphacoders.com/441/441991.jpg"
  );
  const [img3, setImg3] = useState(
    "https://wallpaperaccess.com/full/1829697.jpg"
  );
  const [selected, setSelected] = useState<string>(
    "https://images6.alphacoders.com/441/441991.jpg"
  );

  const desktop = () => {
    return (
      <Box>
        <Box h="50vh" position="relative">
          <Image
            h="50vh"
            position="absolute"
            src={img1}
            alt="1"
            left="10vw"
            borderRadius="50px"
            boxShadow="2xl"
            zIndex={3}
            filter={"blur(10px)"}
            transitionDuration="1s"
          />
          <Image
            h="50vh"
            left="27vw"
            position="absolute"
            src={selected}
            alt="2"
            border="1px solid #392f5a"
            borderRadius="50px"
            boxShadow="2xl"
            zIndex={4}
            transitionDuration="1s"
          />
          <Image
            h="50vh"
            position="absolute"
            src={img3}
            alt="3"
            left="35vw"
            borderRadius="50px"
            boxShadow="2xl"
            zIndex={3}
            filter={"blur(10px)"}
            transitionDuration="1s"
          />
        </Box>
        <Box textAlign="center" marginTop="2%">
          <Button
            onClick={() => setSelected(img1)}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="1s"
          >
            1
          </Button>
          <Button
            onClick={() => setSelected(img2)}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="1s"
            marginLeft="2%"
            marginRight="2%"
          >
            2
          </Button>
          <Button
            onClick={() => setSelected(img3)}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="1s"
          >
            3
          </Button>
        </Box>
      </Box>
    );
  };

  return isMobile ? null : desktop();
};

export default Banner;
