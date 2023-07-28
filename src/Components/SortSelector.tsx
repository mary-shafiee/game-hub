import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder:(sortOrder: string)=>void;
  SortOrder : string;
}
const SortSelector = ({onSelectSortOrder , SortOrder}:Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

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
              onClick={() => onSelectSortOrder(sort.value)}
            >
              {sort.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
