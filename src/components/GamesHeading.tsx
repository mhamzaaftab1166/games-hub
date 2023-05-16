import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
interface Props {
  gamesQuery: GameQuery;
}
const GamesHeading = ({ gamesQuery }: Props) => {
  const genre = useGenre(gamesQuery.genreId);
  const platform = usePlatform(gamesQuery.platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GamesHeading;
