import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/images.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <HStack paddingX={"10px"} marginBottom={2} spacing={10}>
      <Image src={logo} boxSize="60px" borderRadius={25} marginTop={2} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
