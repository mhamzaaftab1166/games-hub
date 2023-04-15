import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px"></Image>
      <Text>navbar</Text>
    </HStack>
  );
};

export default NavBar;
