import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText : string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack paddingX={"10px"} marginBottom={2} spacing={10}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
