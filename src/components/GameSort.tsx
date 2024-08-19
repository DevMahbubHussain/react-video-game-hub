import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const GameSort = () => {
  return (
    <>
      <Menu>
        <MenuButton
          marginBottom="50px"
          as={Button}
          rightIcon={<BsChevronBarDown />}
        >
          Shorting
        </MenuButton>
        <MenuList>
          <MenuItem>Platform</MenuItem>
          <MenuItem>Genre</MenuItem>
          <MenuItem>Rating</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Price</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Relevance</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default GameSort;
