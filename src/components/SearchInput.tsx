import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchFill } from "react-icons/ri";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          children={<RiSearchFill></RiSearchFill>}
        ></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
