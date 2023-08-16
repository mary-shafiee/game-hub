import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/images.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack paddingX={"10px"} marginBottom={2} spacing={10}>
      <Link to="/">
        <Image src={logo} boxSize="60px" borderRadius={30} marginTop={2} objectFit={'cover'} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
