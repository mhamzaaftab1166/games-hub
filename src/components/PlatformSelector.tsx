import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxDropdownMenu } from "react-icons/rx";
import usePlatforms from "../hooks/usePlatforms";
const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  return (
    <Box paddingX="12px" paddingY={2}>
      {error && null}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<RxDropdownMenu></RxDropdownMenu>}
          colorScheme="blue"
        >
          Platforms
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
