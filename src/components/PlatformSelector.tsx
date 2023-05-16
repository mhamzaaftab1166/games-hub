import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxDropdownMenu } from "react-icons/rx";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<RxDropdownMenu></RxDropdownMenu>}
        colorScheme="blue"
      >
        {/* {selectedPlatform?.name || "Platforms"} */}
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
