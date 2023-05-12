import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skelton = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding={10}>
      {isLoading &&
        skelton.map((skelton) => (
          <GameCardContainer key={skelton}>
            {" "}
            <GameCardSkelton></GameCardSkelton>
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          {" "}
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
