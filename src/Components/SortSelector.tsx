import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";


const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const SortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)

  const currentOrder = sortOrders.find(order => order.value === SortOrder) 
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By : {currentOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders &&
          sortOrders.map((sort) => (
            <MenuItem
              value={sort.value}
              key={sort.value}
              onClick={() => setSortOrder(sort.value)}
            >
              {sort.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
