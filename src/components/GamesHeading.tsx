import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gamesQuery: GameQuery;
}
const GamesHeading = ({ gamesQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gamesQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gamesQuery.platformId
  );
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GamesHeading;
