import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  seletedPlatform: Platform | null;
}

const PlatformSelectors = ({ onSelectedPlatform, seletedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton
          marginBottom="50px"
          as={Button}
          rightIcon={<BsChevronBarDown />}
        >
          {seletedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelectors;
