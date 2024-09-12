import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="20px">
        <Image boxSize={30} src={logo} alt="pokeapi" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
