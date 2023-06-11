import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  item: String;
  children: ReactNode | ReactNode[];
}
const ItemDefinition = ({ item, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" color="gray.600" fontSize="md" fontStyle="revert">
        {item}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default ItemDefinition;
