import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skelton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
        {isLoading &&
          skelton.map((skelton) => (
            <GameCardContainer>
              {" "}
              <GameCardSkelton key={skelton}></GameCardSkelton>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
