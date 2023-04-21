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
import { Platform } from "../hooks/useGames";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box paddingX="12px" paddingY={2}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<RxDropdownMenu></RxDropdownMenu>}
          colorScheme="blue"
        >
          {/* {selectedPlatform?.name || "Platforms"} */}
          {(selectedPlatform && selectedPlatform.name) || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
