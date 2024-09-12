import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const GameSort = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Alphabetical" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Average Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const selectedSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );
  const setSelectedOrder = useGameQueryStore((s) => s.setsortOrder);
  return (
    <>
      <Menu>
        <MenuButton
          marginBottom="50px"
          as={Button}
          rightIcon={<BsChevronBarDown />}
        >
          Order by : {selectedSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => {
                setSelectedOrder(order.value);
              }}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default GameSort;
