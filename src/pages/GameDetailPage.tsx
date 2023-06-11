import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import ItemDefinition from "../components/ItemDefinition";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{String(game?.description_raw)}</ExpandableText>
      {game && <GameAttributes game={game} />}
    </>
  );
};

export default GameDetailPage;
