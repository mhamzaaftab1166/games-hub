import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchFill } from "react-icons/ri";
const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        children={<RiSearchFill></RiSearchFill>}
      ></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
