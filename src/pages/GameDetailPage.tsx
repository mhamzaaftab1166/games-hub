import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import ItemDefinition from "../components/ItemDefinition";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailors from "../components/GameTrailors";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{String(game?.description_raw)}</ExpandableText>
        {game && <GameAttributes game={game} />}
      </Box>
      <Box>
        {game && <GameTrailors gameId={game?.id}></GameTrailors>}
        {game && <GameScreenshots gameId={game?.id}></GameScreenshots>}
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
