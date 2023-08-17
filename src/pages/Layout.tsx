import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
