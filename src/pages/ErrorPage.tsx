import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box padding="2.3%">
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Route! Page not found"
            : "An unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
