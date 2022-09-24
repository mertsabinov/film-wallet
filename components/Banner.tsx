import { Box, Button, HStack, Image, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const timer = setTimeout(() => {
    if (autoPlay) {
      switch (selected) {
        case img1:
          setSelected(img2);
          break;
        case img2:
          setSelected(img3);
          break;
        case img3:
          setSelected(img1);
          break;
        default:
          setSelected(img2);
          break;
      }
    }
  }, 2500);

  const desktop = () => {
    useEffect(() => {
      timer;
      return () => clearTimeout(timer);
    }, []);

    return (
      <Box>
        <Box>
          <Image
            w="60vw"
            src={selected}
            alt="banner"
            marginLeft="auto"
            marginRight="auto"
            borderRadius="50px"
            boxShadow="2xl"
          />
        </Box>
        <Box textAlign="center" marginTop="2%">
          <Button
            isActive={selected === img1}
            _active={{ backgroundColor: "#F4D06F", color: "#392f5a" }}
            onClick={() => {
              setAutoPlay(false);
              setSelected(img1);
            }}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="0.5s"
          >
            1
          </Button>
          <Button
            isActive={selected === img2}
            _active={{ backgroundColor: "#F4D06F", color: "#392f5a" }}
            onClick={() => {
              setAutoPlay(false);
              setSelected(img2);
            }}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="0.5s"
            marginLeft="2%"
            marginRight="2%"
          >
            2
          </Button>
          <Button
            isActive={selected === img3}
            _active={{ backgroundColor: "#F4D06F", color: "#392f5a" }}
            onClick={() => {
              setAutoPlay(false);
              setSelected(img3);
            }}
            color="#F4D06F"
            border="2px solid #F4D06F"
            backgroundColor="transparent"
            _hover={{
              color: "#392f5a",
              backgroundColor: "#F4D06F",
            }}
            transitionDuration="0.5s"
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
