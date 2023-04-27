import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gamesQuery: GameQuery;
}
const GamesHeading = ({ gamesQuery }: Props) => {
  const heading = `${gamesQuery?.genre?.name || ""} ${
    gamesQuery?.platform?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GamesHeading;
