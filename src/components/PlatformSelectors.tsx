import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelectors = () => {
  const { data, error } = usePlatforms();

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton
          marginBottom="50px"
          as={Button}
          rightIcon={<BsChevronBarDown />}
        >
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
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
