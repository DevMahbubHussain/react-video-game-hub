import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="20px">
        <Image boxSize={30} src={logo} alt="pokeapi" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
