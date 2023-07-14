import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box borderTopRadius={10} overflow={"hidden"} textAlign={"left"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
