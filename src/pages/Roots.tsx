import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Roots = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Roots;
